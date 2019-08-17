package com.mypack.controller;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.alibaba.fastjson.JSONObject;
import com.mypack.model.Content;
import com.mypack.model.User;
import com.mypack.service.UserService;
import com.mypack.tools.MyTools;
import com.mypack.tools.Sha1;

@Controller
public class UserController{
	@Resource
	private UserService userServiceImpl;
	
	@RequestMapping("ajax/login")
	@ResponseBody
	public String login(User user,HttpServletRequest req){
		if(user.getId()==null || user.getPassword()==null || !MyTools.checkLength(user.getId(),10,5) ) return "0";
		//|| !checkLength(user.getPassword(),16,6)
		Map<String, Object> map = userServiceImpl.login(user);		
		long state = (long)map.get("count");
		if(state>=1){
			req.getSession().setAttribute("user", map.get("username"));
			req.getSession().setAttribute("id", user.getId());
		}
		return (String)map.get("username");
    }
	
	@RequestMapping("ajax/getLoginState")
	@ResponseBody
	public JSONObject getLoginState(HttpServletRequest req){
		String login_user = (String)req.getSession().getAttribute("user");
		JSONObject json = null;
		if(login_user == null){
    		json = JSONObject.parseObject("{'state':'0'}");
    	}else{
    		json = JSONObject.parseObject("{'state':'1','user':'"+login_user+"'}");
    	}
		return json;
    }
	
	
	@RequestMapping("/ajax/queryLikeMessageId")
	@ResponseBody
	public String queryLikeMessageId(HttpServletRequest req){
		String id = (String)req.getSession().getAttribute("id");
		if(id==null){return "0";}
		String data = userServiceImpl.queryLikeMessageId(id);
		if(data==null || data==""){
			return "0";
		}else{
			req.getSession().setAttribute("allId", data);
			return data;
		}
    }
	
	@RequestMapping("/ajax/passSqlData")
	@ResponseBody
	public String passSqlData(String id,String state,HttpServletRequest req){
		String userId = (String)req.getSession().getAttribute("id");
    	if(userId == null || !userServiceImpl.isCorrectId(id)){
    		return "0";
    	}
    	String allId = (String) req.getSession().getAttribute("allId");
    	String allPeople = userServiceImpl.queryLikePeopleId(id);
    	String[] idArr = allId.split("-");
    	String[] peopleArr = allPeople.split("-");
    	if(state.equals("1")){//点赞
    		for(String messageId : idArr){
    			if(messageId.equals(id)){
    				return "0";
    			}
    		}
    		if(allId.equals("")){
    			allId = id;
        	}else{
        		allId = allId + "-" + id;
        	}
    		if(allPeople.equals("")){
    			allPeople = userId;
        	}else{
        		allPeople = allPeople + "-" + userId;
        	}
    	}else if(state.equals("2")){//取消点赞
    		boolean has = false;
    		for(String id2 : idArr){
    			if(id2.equals(id)){
    				has=true;
    				break;
    			}
    		}
    		if(!has){
				return "0";
    		}
    		allId=MyTools.changeId(idArr,id);
    		allPeople=MyTools.changeId(peopleArr,userId);
    	}
    	Content content = new Content();
		content.setMessageId(id);
		content.setLikesPeopleId(allPeople);
		User user = new User();
		user.setId(userId);
		user.setLikeMessageId(allId);
		if(userServiceImpl.updateSqlData(content, user, state)){
			req.getSession().setAttribute("allId",allId);
			return "1";
		}
    	return "0";
	}  
	
	@RequestMapping("/ajax/logout")
	@ResponseBody
	public String logout(HttpServletRequest req){
		String username = (String)req.getSession().getAttribute("user");
    	if(username == null){
    		return "0";
    	}
		req.getSession().removeAttribute("user");
		req.getSession().removeAttribute("id");
		return "1";
    }
	@RequestMapping("/ajax/getName")
	@ResponseBody
	public String getName(HttpServletRequest req){
		String username = (String)req.getSession().getAttribute("user");
		return username;
    }
	
	@RequestMapping("/ajax/check_exist")
	@ResponseBody
	public String check_exist(User user){
		//System.out.println(user);	
    	if(user.getUsername() == null || !user.getUsername().matches("^[a-zA-Z]{1}[0-9a-zA-Z_]{2,}$") || !MyTools.checkLength(user.getUsername(),10,5)){
    		return "0";
    	}
    	return userServiceImpl.check_exist(user);
    }
	//找回密码查询账号是否存在
	@RequestMapping("/ajax/check_exist2")
	@ResponseBody
	public String check_exist2(User user,HttpServletRequest req){	
    	if(user.getId() == null || !MyTools.checkLength(user.getId(),10,5)){
    		return "0";
    	}
    	String state = userServiceImpl.check_exist(user);
    	if(state.equals("2")){
    		req.getSession().setAttribute("find_id", user.getId());
    	}
    	return state;
    }
	
	@RequestMapping("/ajax/getVisitorMessage")
	@ResponseBody
	public User getVisitorMessage(String N){//查询用户信息
    	if(N==null){
    		return null;
    	}        	
    	return userServiceImpl.queryPersonalMessage(N);
    }
	
	@RequestMapping("form/loginResult")
    public String loginResult(User user,HttpServletRequest req){
    	if(user.getId()==null || user.getPassword()==null ||!MyTools.checkLength(user.getId(),10,5) ){
    		//|| !checkLength(user.getPassword(),16,6)
    		return "redirect:/Result/loginResultFail.html";
    	}
    	try {
    		String pass = user.getPassword();
    		if(pass.length()<20){
    			user.setPassword(Sha1.shaEncode(pass));
    		}
		} catch (Exception e) {
			e.printStackTrace();
		}
    	Map<String, Object> map = userServiceImpl.login(user);
		long state = (long)map.get("count");
		if(state>=1){
			req.getSession().setAttribute("user", map.get("username"));
			req.getSession().setAttribute("id", user.getId());
			return "redirect:/Result/loginResultSuccess.html";
		}else{
    		return "redirect:/Result/loginResultFail.html";
    	}
    }
    @RequestMapping("/ajax/getUrl")
	@ResponseBody
	public String getUrl(HttpServletRequest req){//查询用户要跳转的页面
    	String url= (String) req.getSession().getAttribute("url");
    	req.getSession().removeAttribute("url");
        if(url!=null){
        	return url;
        }else{
        	return "0";
        }
    }
	//注册提交表单
	@RequestMapping("form/register")
	public String register(User user,@RequestParam("likes")List<String> hobbies){//注册
    	return userServiceImpl.insertNewUser(user, hobbies);
	}
	
	@RequestMapping("/ajax/personalMessage")
	@ResponseBody
	public User personalMessage(HttpServletRequest req){//查询自己的信息
		String N = (String) req.getSession().getAttribute("user");
    	if(N==null){
    		return null;
    	}        	
    	return userServiceImpl.queryPersonalMessage(N);
    }
	//修改自己的信息
	@RequestMapping("form/changeMessage")
	public String changeMessage(User user,@RequestParam("likes")List<String> hobbies,HttpServletRequest req){//注册
		String login_user = (String) req.getSession().getAttribute("user");
    	if(login_user==null){
    		return "redirect:/Result/xiandenglu.html";
    	}
    	user.setUsername(login_user);
    	return userServiceImpl.updateMessage(user, hobbies);
	}
	
	@RequestMapping("form/changePassword")
	public String changePassword(User user,HttpServletRequest req){
		String login_user = (String) req.getSession().getAttribute("user");
    	if(login_user==null){
    		return "redirect:/Result/xiandenglu.html";
    	}
    	user.setUsername(login_user);
    	return userServiceImpl.updatePassword(user);
	}
}
