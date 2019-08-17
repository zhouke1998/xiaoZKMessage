package com.mypack.controller;

import java.io.UnsupportedEncodingException;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.alibaba.fastjson.JSONArray;
import com.mypack.model.Comment;
import com.mypack.service.CommentService;

@Controller
public class CommentController{
	@Resource
	private CommentService commentServiceImpl;
	
	@RequestMapping("/ajax/comment/query")
	@ResponseBody
	public JSONArray login(String messId,HttpServletRequest req){
		String userId = (String)req.getSession().getAttribute("id");
		return commentServiceImpl.queryComments(messId,userId);
    } 
	
	@RequestMapping("/ajax/comment/writeComment")
	@ResponseBody
	public String writeComment(Comment comment,HttpServletRequest req) throws UnsupportedEncodingException{
		String userId = (String)req.getSession().getAttribute("id");
    	if(userId == null){
    		return "0";
    	}
    	comment.setUserId(userId);
		return commentServiceImpl.insertComment(comment);
    }
	
	@RequestMapping("/ajax/comment/deleteComment")
	@ResponseBody
	public String deleteComment(Comment comment,HttpServletRequest req){
		String userId = (String)req.getSession().getAttribute("id");
    	if(userId == null){
    		return "0";
    	}
    	comment.setUserId(userId);
    	return commentServiceImpl.deleteComment(comment);
    }
}
