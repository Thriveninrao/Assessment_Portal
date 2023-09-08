package com.portal.service.impl;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.LinkedHashSet;
import java.util.Set;

import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portal.model.assessment.Assessment;
import com.portal.model.assessment.Question;
import com.portal.repository.AssessmentRepository;
import com.portal.service.AssessmentServiceInterface;


@Service
public class AssessmentServiceImpl implements AssessmentServiceInterface {

	@Autowired
	private AssessmentRepository assessRepo;

	@Override
	public Assessment addAssessment(Assessment assessment) {
		return this.assessRepo.save(assessment);
	}

	@Override
	public Assessment updateAssessment(Assessment assessment) {
		return this.assessRepo.save(assessment);
	}

	@Override
	public Set<Assessment> getAssessments() {

		return new LinkedHashSet<Assessment>(this.assessRepo.findAll());
	}

	@Override
	public Assessment getAssessment(Long assessmentId) {

		return this.assessRepo.findById(assessmentId).get();
	}

	@Override
	public void deleteAssessment(Long assessmentId) {
		Assessment assessment = assessRepo.findById(assessmentId).get();
		System.out.println(assessment.getAssessmentTitle());
		if (assessment != null) {
			assessRepo.deleteById(assessmentId);
			System.out.println("1");
		}

	}

	@Override
	public ByteArrayInputStream getAllQuestions(long AssesmentId) throws IOException {
		Set<Question> questionsList = assessRepo.findById(AssesmentId).get().getQuestions();
		int noOfQuestions = questionsList.size();
		try (
				// Create a new workbook
				Workbook workbook = new XSSFWorkbook()) {
			Sheet sheet = workbook.createSheet("Questions Exported");
			sheet.protectSheet("Softtek@2023");

			// Create header row
			Row headerRow = sheet.createRow(0);
			// Styling for header
			CellStyle style = workbook.createCellStyle();
			Font font = workbook.createFont();
			font.setFontName(HSSFFont.FONT_ARIAL);
			font.setColor(IndexedColors.ORANGE.getIndex());
			font.setFontHeightInPoints((short) 10);
			font.setBold(true);
			style.setFont(font);
			style.setLocked(true);

			// setting values for header row
			headerRow.createCell(0).setCellValue("Question");
			headerRow.createCell(1).setCellValue("Option 1");
			headerRow.createCell(2).setCellValue("Option 2");
			headerRow.createCell(3).setCellValue("Option 3");
			headerRow.createCell(4).setCellValue("Option 4");
			headerRow.createCell(5).setCellValue("Answer");

			
			// till 10th column style will be aplied
			for (int j = 0; j <=5; j++)
				headerRow.getCell(j).setCellStyle(style);

			int rowNum = 1;
			for (Question quest : questionsList) {
				Row row = sheet.createRow(rowNum++);
				row.createCell(0).setCellValue(quest.getContent());
				row.createCell(1).setCellValue(quest.getOption1());
				row.createCell(2).setCellValue(quest.getOption2());
				row.createCell(3).setCellValue(quest.getOption3());
				row.createCell(4).setCellValue(quest.getOption4());
				row.createCell(5).setCellValue(quest.getAnswer());
			}
			// Auto-size columns
			for (int i = 0; i <= 10; i++) {
				sheet.autoSizeColumn(i);
			}
			// Write workbook to byte array
			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
			workbook.write(outputStream);
			byte[] bytes = outputStream.toByteArray();

			// Return byte array as a ByteArrayInputStream
			System.out.println("AssessmentServiceImpl.getAllQuestions()");
			return new ByteArrayInputStream(bytes);

		}

	}

}
