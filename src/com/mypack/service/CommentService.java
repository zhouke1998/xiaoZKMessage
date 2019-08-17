package com.mypack.service;

import java.io.UnsupportedEncodingException;

import com.alibaba.fastjson.JSONArray;
import com.mypack.model.Comment;

public interface CommentService {
	public JSONArray queryComments(String id, String userId);
	
	String insertComment(Comment comment) throws UnsupportedEncodingException;
	
	String deleteComment(Comment comment);
}
