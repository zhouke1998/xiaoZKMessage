package com.mypack.model;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

public class Content {
	private String messageId ;
	private String userId ;
	private String content = null;
	private String username = null;	
	private String likesPeopleId = null;
	private String commentsNum = null;
	private String img_urls = null;
	
	private int likeNum = 0;
	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date time =null;
	//
	//获取点赞的总数量	
	public int getLikeNum() {
		return likeNum;
	}
	public void setLikeNum(int likeNum) {
		this.likeNum = likeNum;
	}
	//这条留言的主人
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	//留言的时间
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	//留言者的ID
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	//留言的ID
	public String getMessageId() {
		return messageId;
	}
	public void setMessageId(String id) {
		this.messageId = id;
	}
	//留言的具体信息
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	//
	public String getLikesPeopleId() {
		return likesPeopleId;
	}
	public void setLikesPeopleId(String likesPeopleId) {
		this.likesPeopleId = likesPeopleId;
	}
	public String getCommentsNum() {
		return commentsNum;
	}
	public void setCommentsNum(String commentsNum) {
		this.commentsNum = commentsNum;
	}
	public String getImg_urls() {
		return img_urls;
	}
	public void setImg_urls(String img_urls) {
		this.img_urls = img_urls;
	}
	@Override
	public String toString() {
		return "Content [messageId=" + messageId + ", userId=" + userId + ", content=" + content + ", username="
				+ username + ", likesPeopleId=" + likesPeopleId + ", commentsNum=" + commentsNum + ", img_urls="
				+ img_urls + ", likeNum=" + likeNum + ", time=" + time + "]";
	}
	
	
}
