package com.mypack.service;

import com.mypack.model.PwdManage;

public interface PwdManageService {
	String getPwd_Q(String id);
	
	int checkPwd_A(PwdManage pwdManage);
	
	int updNewPwd(PwdManage pwdManage);
	
	int insPwdManage(PwdManage pwdManage);
	
	int updPwdManage(PwdManage pwdManage);
}
