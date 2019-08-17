package com.mypack.mapper;

import com.mypack.model.PwdManage;

public interface PwdManageMapper {
	String getPwd_Q(String id);
	
	int checkPwd_A(PwdManage pwdManage);
	
	int setNewPwd(PwdManage pwdManage);
	
	int insPwdManage(PwdManage pwdManage);
	
	int updPwdManage(PwdManage pwdManage);
}
