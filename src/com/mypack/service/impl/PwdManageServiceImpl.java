package com.mypack.service.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.mypack.mapper.PwdManageMapper;
import com.mypack.model.PwdManage;
import com.mypack.service.PwdManageService;
@Service
public class PwdManageServiceImpl implements PwdManageService{
	@Resource
	private PwdManageMapper pwdManageMapper;

	@Override
	public String getPwd_Q(String id) {
		return pwdManageMapper.getPwd_Q(id);
	}

	@Override
	public int checkPwd_A(PwdManage pwdManage) {
		int c = pwdManageMapper.checkPwd_A(pwdManage);
		return c;
	}
	@Override
	public int updNewPwd(PwdManage pwdManage){
		return pwdManageMapper.setNewPwd(pwdManage);
	}
	@Override
	public int insPwdManage(PwdManage pwdManage){
		return pwdManageMapper.insPwdManage(pwdManage);
	}
	@Override
	public int updPwdManage(PwdManage pwdManage){
		return pwdManageMapper.updPwdManage(pwdManage);
	}
}
