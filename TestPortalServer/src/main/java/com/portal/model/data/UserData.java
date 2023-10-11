package com.portal.model.data;

import lombok.Data;

@Data
public class UserData {
	private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private boolean selected;

}
