package com.mypack.model;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

public class Comment {
	private String id;
	private String contentId;
	private String userId;
	private String canDel;
	private String commcontent;
	@JSONField(format="yyyy-MM-dd HH:mm:ss")
	private Date time =null;
	private String userName;
	private String img_urls;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContentId() {
		return contentId;
	}
	public void setContentId(String contentId) {
		this.contentId = contentId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getCanDel() {
		return canDel;
	}
	public void setCanDel(String canDel) {
		this.canDel = canDel;
	}
	public String getCommcontent() {
		return commcontent;
	}
	public void setCommcontent(String commcontent) {
		this.commcontent = commcontent;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getImg_urls() {
		return img_urls;
	}
	public void setImg_urls(String img_urls) {
		this.img_urls = img_urls;
	}
	@Override
	public String toString() {
		return "Comment [id=" + id + ", contentId=" + contentId + ", userId=" + userId + ", canDel=" + canDel
				+ ", commcontent=" + commcontent + ", time=" + time + ", userName=" + userName + ", img_urls=" + img_urls + "]";
	}
	
	
	

}
