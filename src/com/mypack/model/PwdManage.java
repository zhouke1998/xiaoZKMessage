package com.mypack.model;

public class PwdManage {
	private String userId;
	private String pwd_Q;
	private String pwd_A;
	private String password =null;
	private String passwordConfirm =null;
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPwd_Q() {
		return pwd_Q;
	}
	public void setPwd_Q(String pwd_Q) {
		this.pwd_Q = pwd_Q;
	}
	public String getPwd_A() {
		return pwd_A;
	}
	public void setPwd_A(String pwd_A) {
		this.pwd_A = pwd_A;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPasswordConfirm() {
		return passwordConfirm;
	}
	public void setPasswordConfirm(String passwordConfirm) {
		this.passwordConfirm = passwordConfirm;
	}
	@Override
	public String toString() {
		return "PwdManage [userId=" + userId + ", pwd_Q=" + pwd_Q + ", pwd_A=" + pwd_A + ", password=" + password
				+ ", passwordConfirm=" + passwordConfirm + "]";
	}
	
	
}
