package com.mypack.mapper;

import java.util.Map;

import com.mypack.model.Content;
import com.mypack.model.User;

public interface UserMapper {
	public Map<String, Object> login(User user);
	
	public String queryLikeMessageId(String id);
	
	public int isCorrectId(String id);
	
	public String queryLikePeopleId(String id);
	
	public int updateLikePeopleCount1(String id);
	
	public int updateLikePeopleCount2(String id);
	
	public int updateLikePeople(Content content);
	
	public int updateLikeMessageId(User user);
	
	public int check_exist(User user);
	
	public User queryPersonalMessage(String name);
	
	int getMaxId();
	
	int insertNewUser(User user);
	
	int updateMessage(User user);
	
	int updatePassword(User user);
}
