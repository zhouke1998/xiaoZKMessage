package com.mypack.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mypack.model.PwdManage;
import com.mypack.service.PwdManageService;
import com.mypack.tools.MyTools;
import com.mypack.tools.Sha1;

@Controller
public class PwdManageController{
	@Resource
	private PwdManageService pwdManageServiceImpl;
	
	@RequestMapping("ajax/getPwd_Q")
	@ResponseBody
	public String getPwd_Q(HttpServletRequest req){
		String find_id = (String) req.getSession().getAttribute("find_id");
		if(find_id==null){
			return "error";
		}
		String map_pwd_q = pwdManageServiceImpl.getPwd_Q(find_id);
		return find_id+"-"+MyTools.map_pwd_Q(map_pwd_q);
    }
	
	@RequestMapping("ajax/getUserId")
	@ResponseBody
	public String getUserId(HttpServletRequest req){
		String userId = (String) req.getSession().getAttribute("id");
		if(userId==null){
			return "error";
		}
		return userId;
    }
	
	@RequestMapping("ajax/checkPwd_A")
	@ResponseBody
	public String checkPwd_A(PwdManage pwdManage,HttpServletRequest req){
		String find_id = (String) req.getSession().getAttribute("find_id");
		Integer find_num = (Integer) req.getSession().getAttribute("find_num");
		if(find_id==null || !pwdManage.getPwd_A().matches("^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$")){ 
			return "error";
		}
		if(find_num==null){
			req.getSession().setAttribute("find_num", 1);
		}else if(find_num==5){
			return "3";
		}else{
			req.getSession().setAttribute("find_num", find_num+1);
		}
		pwdManage.setUserId(find_id);
		int c = pwdManageServiceImpl.checkPwd_A(pwdManage);
		if(c==0){
			return "0";
		}else if(c==1){
			req.getSession().setAttribute("checkOkId", find_id);
			return "1";
		}else{
			return "error";
		}
    }
	//修改密保问题的检测答案
	@RequestMapping("ajax/checkPwdManage_A")
	@ResponseBody
	public String checkPwdManage_A(PwdManage pwdManage,HttpServletRequest req){
		String userId = (String) req.getSession().getAttribute("id");
		Integer find_num = (Integer) req.getSession().getAttribute("find_num");
		//System.out.println(pwdManage);
		if(userId==null || !pwdManage.getPwd_A().matches("^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$")){
			return "error";
		}
		if(find_num==null){
			req.getSession().setAttribute("find_num", 1);
		}else if(find_num==5){
			return "3";
		}else{
			req.getSession().setAttribute("find_num", find_num+1);
		}
		pwdManage.setUserId(userId);
		int c = pwdManageServiceImpl.checkPwd_A(pwdManage);
		if(c==0){
			return "0";
		}else if(c==1){
			req.getSession().setAttribute("checkOkPwdManage", userId);
			return "1";
		}else{
			return "error";
		}
    }
	
	@RequestMapping(value = "/form/setNewPwd" , method=RequestMethod.POST)
	public String setNewPwd(PwdManage pwdManage, HttpServletRequest req){
		
		
		String checkOkId = (String) req.getSession().getAttribute("checkOkId");
		req.getSession().removeAttribute("checkOkId");
		String find_id = (String) req.getSession().getAttribute("find_id");
		//System.out.println(checkOkId+"--"+find_id);
		
		if(checkOkId==null || find_id==null || pwdManage.getPassword()==null || pwdManage.getPasswordConfirm()==null || !pwdManage.getPassword().equals(pwdManage.getPasswordConfirm())){
			return "redirect:/reset_pwd/input_account";
		}
		pwdManage.setUserId(find_id);
		try {
			pwdManage.setPassword(Sha1.shaEncode(pwdManage.getPassword()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		int c = pwdManageServiceImpl.updNewPwd(pwdManage);
		req.getSession().removeAttribute("find_id");
		req.getSession().removeAttribute("find_num");
		if(c==1){
			req.getSession().removeAttribute("user");
			req.getSession().removeAttribute("id");
			return "redirect:/reset_pwd/reset_pwd_set_new_pwd_success";
		}else{
			return "redirect:/reset_pwd/reset_pwd_set_new_pwd_fail";
		}
    }
	//判断能否设置新密码
	@RequestMapping("ajax/canSetNew")
	@ResponseBody
	public String canSetNew(HttpServletRequest req){
		String checkOkId = (String)req.getSession().getAttribute("checkOkId");
		if(checkOkId==null){
			return "0";
		}else{
			return "1";
		}
    	
    }
	
	@RequestMapping("ajax/checkHasPwd")
	@ResponseBody
	public String checkHsaPwd(HttpServletRequest req){
		String userId = (String) req.getSession().getAttribute("id");
		if(userId==null){
			return "error";
		}
		return userId+"-"+MyTools.map_pwd_Q(pwdManageServiceImpl.getPwd_Q(userId));
    }
	
	@RequestMapping(value = "ajax/setPwdManage",method=RequestMethod.POST)
	@ResponseBody
	public String setPwdManage(HttpServletRequest req,PwdManage pwdManage){
		String userId = (String) req.getSession().getAttribute("id");
		if(userId==null || pwdManageServiceImpl.getPwd_Q(userId)!=null || MyTools.map_pwd_Q(pwdManage.getPwd_Q()).equals("null") || !pwdManage.getPwd_A().matches("^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$")){
			return "error";
		}
		pwdManage.setUserId(userId);
		//System.out.println(pwdManage);
		int c = pwdManageServiceImpl.insPwdManage(pwdManage);
		if(c==1){
			return "1";
		}else{
			return "0";
		}
    }
	
	@RequestMapping(value = "ajax/changePwdManage",method=RequestMethod.POST)
	@ResponseBody
	public String changePwdManage(HttpServletRequest req,PwdManage pwdManage){
		String userId = (String) req.getSession().getAttribute("id");
		if(userId==null || MyTools.map_pwd_Q(pwdManage.getPwd_Q()).equals("null") || pwdManageServiceImpl.getPwd_Q(userId)==null || !pwdManage.getPwd_A().matches("^[A-Za-z0-9\u4e00-\u9fa5]{2,10}$")){
			return "error";
		}
		String checkOkPwdManage = (String) req.getSession().getAttribute("checkOkPwdManage");
		if(checkOkPwdManage==null || !userId.equals(checkOkPwdManage)){
			System.out.println("Bug");
			return "error";
		}
		pwdManage.setUserId(userId);
		//System.out.println(pwdManage);
		int c = pwdManageServiceImpl.updPwdManage(pwdManage);
		if(c==1){
			return "1";
		}else{
			return "0";
		}
    }
	
	@RequestMapping(value = "ajax/remindSetPwdManage")
	@ResponseBody
	public String remindSetPwdManage(HttpServletRequest req){
		String userId = (String) req.getSession().getAttribute("id");
		if(userId==null){
			return "error";
		}
		String pwd_Q = pwdManageServiceImpl.getPwd_Q(userId);
		if(pwd_Q!=null){
			return "1";
		}
		String remind = (String) req.getSession().getAttribute("remind");
		if(remind!=null){
			return "1";
		}else{
			req.getSession().setAttribute("remind","1");
			return "0";
		}
    }
	
	@RequestMapping(value = "/ajax/vipService",method=RequestMethod.POST)
	@ResponseBody
	public String vipService(HttpServletRequest req,PwdManage pwdManage){
		String userId = (String)req.getSession().getAttribute("id");
		if(userId==null || !userId.equals("10001")){
			return "非法请求！";
		}
		int c = pwdManageServiceImpl.updNewPwd(pwdManage);
		if(c==1){
			return "修改成功！";
		}else{
			return "修改失败";
		}
    }
    
}
