package com.mypack.service.impl;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mypack.mapper.CommentMapper;
import com.mypack.model.Comment;
import com.mypack.service.CommentService;
import com.mypack.tools.MyTools;
@Service
public class CommentServiceImpl implements CommentService{
	@Resource
	private CommentMapper commentMapper;
	
	@Override
	public JSONArray queryComments(String id, String userId) {
		List<Comment> list = commentMapper.queryComments(id);
		JSONArray array = new JSONArray();
        for(Comment com : list){
        	if(com.getUserId().equals(userId)){
        		com.setCanDel("true");
        	}else{
        		com.setCanDel("false");
        	}
            JSONObject json = (JSONObject) JSON.toJSON(com);
            array.add(json);
        }
        return array;
	}

	@Override
	public String insertComment(Comment comment) throws UnsupportedEncodingException {
		comment.setTime(new Date());
		String content = comment.getCommcontent();
		int length = content.length();
    	if(length<1 || length>999){
    		return "2";
    	}
    	content = MyTools.htmlEncode(URLDecoder.decode(content, "UTF-8"));
    	comment.setCommcontent(content);
    	commentMapper.updateCommentsNum1(comment.getContentId());
		return String.valueOf(commentMapper.insertComment(comment));
	}
	
	@Override
	public String deleteComment(Comment comment) {
		commentMapper.updateCommentsNum0(comment);
		return String.valueOf(commentMapper.deleteComment(comment));
	}
}
