package com.mypack.service;

import java.util.List;
import java.util.Map;

import com.mypack.model.Content;
import com.mypack.model.User;

public interface UserService {
	public Map<String, Object> login(User user);
	
	public String queryLikeMessageId(String id);
	
	public boolean isCorrectId(String id);
	
	public String queryLikePeopleId(String id);

	boolean updateSqlData(Content content, User user, String state);
	
	public String check_exist(User user);
	
	public User queryPersonalMessage(String name);
	
	int getMaxId();
	
	String insertNewUser(User user,List<String> hobbies);
	
	String updateMessage(User user,List<String> hobbies);
	
	String updatePassword(User user);
}
