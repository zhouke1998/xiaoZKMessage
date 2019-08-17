package com.mypack.mapper;

import java.util.List;

import com.mypack.model.Comment;

public interface CommentMapper {
	List<Comment> queryComments(String id);
	
	int insertComment(Comment comment);
	
	int deleteComment(Comment comment);
	
	int updateCommentsNum0(Comment comment);
	
	int updateCommentsNum1(String id);
}
