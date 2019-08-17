package com.mypack.model;

public class User {
	private String id ;
	private String username =null;
	private String password =null;
	private String passwordConfirm =null;
	private String likeMessageId =null;
	private String hobbies =null;
	private String email =null;
	private int age ;
	private String sex =null;
	private String adress =null;
	
	
	public String getLikeMessageId() {
		return likeMessageId;
	}
	public void setLikeMessageId(String likeMessageId) {
		this.likeMessageId = likeMessageId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getHobbies() {
		return hobbies;
	}
	public void setHobbies(String hobbies) {
		this.hobbies = hobbies;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getPasswordConfirm() {
		return passwordConfirm;
	}
	public void setPasswordConfirm(String passwordConfirm) {
		this.passwordConfirm = passwordConfirm;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", passwordConfirm="
				+ passwordConfirm + ", likeMessageId=" + likeMessageId + ", hobbies=" + hobbies + ", email=" + email
				+ ", age=" + age + ", sex=" + sex + ", adress=" + adress + "]";
	}
	
}
