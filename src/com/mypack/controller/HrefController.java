package com.mypack.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HrefController {
	@RequestMapping("messageBoard")
	public String messageBoard(HttpServletRequest req){
		String username = (String)req.getSession().getAttribute("user");
    	if(username == null){
    		return "redirect:/Result/xiandenglu.html";
    	}
    	return "/pages/messageBoard.jsp";
    }
	
	@RequestMapping("login")
	public String login(HttpServletRequest req){
		String url= req.getHeader("Referer");
        if(url!=null){
        	req.getSession().setAttribute("url", url);
        }
    	return "/pages/login.jsp";
    }
	
	@RequestMapping("register")
	public String register(){
    	return "/pages/register.html";
    }
	
	@RequestMapping("userInfo/{name}")//restful类型
    public String demo2(@PathVariable String name){
        return "/pages/visitorCenter.html";
    }
	
	@RequestMapping("personalCenter")
	public String personalCenter(HttpServletRequest req){
		String username = (String)req.getSession().getAttribute("user");
    	if(username == null){
    		return "redirect:/Result/xiandenglu.html";
    	}
    	return "/pages/personalCenter.jsp";
    }
	
	@RequestMapping("/reset_pwd/input_account")
	public String reset_pwd(){
    	return "/reset_pwd/reset1.html";
    }
	
	@RequestMapping("/reset_pwd/reset_pwd_verify")
	public String reset_pwd_verify(HttpServletRequest req){
		String find_id = (String)req.getSession().getAttribute("find_id");
		if(find_id!=null){
			req.getSession().removeAttribute("checkOkId");
			return "/reset_pwd/reset2.jsp";
		}else{
			return "redirect:/reset_pwd/input_account";
		}
    	
    }
	@RequestMapping("/reset_pwd/reset_pwd_set_new_pwd")
	public String reset_pwd_set_new_pwd(HttpServletRequest req){
		String checkOkId = (String)req.getSession().getAttribute("checkOkId");
		String find_id = (String) req.getSession().getAttribute("find_id");
		if(checkOkId!=null){
			return "/reset_pwd/reset3.jsp";
		}else if(find_id==null){
			return "redirect:/reset_pwd/input_account";
		}else{
			return "redirect:/reset_pwd/reset_pwd_verify";
		}
    	
    }
	@RequestMapping("/reset_pwd/reset_pwd_set_new_pwd_success")
	public String reset_pwd_set_new_pwd_success(HttpServletRequest req){
		return "/reset_pwd/reset4_S.jsp";
	}
	@RequestMapping("/reset_pwd/reset_pwd_set_new_pwd_fail")
	public String reset_pwd_set_new_pwd_fail(HttpServletRequest req){
		return "/reset_pwd/reset4_F.jsp";
	}
	//密保设置
	@RequestMapping("/pwdManage/index")
	public String pwdManage(HttpServletRequest req){
		return "/pwdManage/pwdManage.jsp";
	}
	
	//密保设置
	@RequestMapping("/pwdManage/change_pwdManage_verify")
	public String change_pwdManage_verify(HttpServletRequest req){
		return "/pwdManage/change_pwdManage_verify.jsp";
	}
	
	//密保设置
	@RequestMapping("/pwdManage/change_pwdManage")
	public String change_pwdManage(HttpServletRequest req){
		String userId = (String)req.getSession().getAttribute("id");
		String checkOkPwdManage = (String) req.getSession().getAttribute("checkOkPwdManage");
		if(checkOkPwdManage!=null && userId!=null && userId.equals(checkOkPwdManage)){	
			return "/pwdManage/change_pwdManage.jsp";
		}else{
			req.getSession().removeAttribute("checkOkPwdManage");
			return "redirect:/pwdManage/change_pwdManage_verify";
		}
	}
	
	//VIP
	@RequestMapping("/vip")
	public String vip(HttpServletRequest req){
		String userId = (String)req.getSession().getAttribute("id");
		if(userId==null || !userId.equals("10001")){
			return "redirect:/";
		}else{
			return "/vip/vip.jsp";
		}
	}
	
	//404跳转
	@RequestMapping("/error/404")
	public String error_404(){
		int randNum = (int)(3*Math.random());
		if(randNum==0){
			return "/error/404_1.jsp";
		}else if(randNum==1){
			return "/error/404_2.jsp";
		}else{
			return "/error/404_3.jsp";
		}
		
	}
	
}
