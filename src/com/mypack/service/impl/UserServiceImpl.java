package com.mypack.service.impl;

import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.mypack.mapper.UserMapper;
import com.mypack.model.Content;
import com.mypack.model.User;
import com.mypack.service.UserService;
import com.mypack.tools.MyTools;
import com.mypack.tools.Sha1;
@Service
public class UserServiceImpl implements UserService{
	@Resource
	private UserMapper userMapper;

	@Override
	public Map<String, Object> login(User user) {
		return userMapper.login(user);
	}
	@Override
	public String queryLikeMessageId(String id){
		return userMapper.queryLikeMessageId(id);
	}
	@Override
	public boolean isCorrectId(String id){
		if(userMapper.isCorrectId(id)>=1){
			return true;
		}else{
			return false;
		}
	}
	@Override
	public String queryLikePeopleId(String id){
		String state = userMapper.queryLikePeopleId(id);
		if(state!=null){
			return state;
		}
		return "";
	}
	@Override
	public boolean updateSqlData(Content content,User user,String state){
		int state0 = 0;
		if(state.equals("1")){
			state0 = userMapper.updateLikePeopleCount1(content.getMessageId());
		}else{
			state0 = userMapper.updateLikePeopleCount2(content.getMessageId());
		}
		if(state0>0 && userMapper.updateLikePeople(content)>0 && userMapper.updateLikeMessageId(user)>0){
			return true;
		}else{
			return false;
		}
	}
	
	@Override
	public String check_exist(User user){
		int c = userMapper.check_exist(user);
		return String.valueOf(1+c);
		//1代表不存在，2代表已存在
	}
	
	@Override
	public User queryPersonalMessage(String name){
		return userMapper.queryPersonalMessage(name);
	}
	@Override
	public int getMaxId() {
		int max = userMapper.getMaxId();
		return max+1;
	}
	@Override
	public String insertNewUser(User user,List<String> hobbies) {
		boolean legal = true;
		if(check_exist(user).equals("2")){
			legal = false;
		}
		//账号密码合法
		else if(!MyTools.checkLength(user.getUsername(),10,5)  || !user.getPassword().equals(user.getPasswordConfirm()) || !user.getUsername().matches("^[a-zA-Z]{1}[0-9a-zA-Z_]{2,}$") ){    
    		legal = false;
    		//|| !checkLength(user.getPassword(),16,6)|| !user.getPassword().matches("^[0-9a-zA-Z_]{1,}$")
    	}
    	//邮箱合法
    	else if(!user.getEmail().matches("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$")){
    		legal = false;
    	}
    	//年龄合法      
    	else if( user.getAge()<10 || user.getAge()>99){
    		legal = false;
    	}
    	//性别合法      
    	else if( !user.getSex().equals("男") && !user.getSex().equals("女")){
    		legal = false;
    	}
    	//地址合法      
    	else if( !MyTools.checkLength(user.getAdress(),20,3)){
    		legal = false;
    	}
    	if(!legal){
    		return "redirect:/Result/registerResultFail.html";
    	}
    	try {
			user.setPassword(Sha1.shaEncode(user.getPassword()));
		} catch (Exception e) {
			e.printStackTrace();
		}
    	//爱好组合
    	String likesString = "";
    	for(int i=0;i<hobbies.size();i++){
    		int hobby = Integer.valueOf(hobbies.get(i));
    		if(hobby<5 && hobby>0){
    			if(likesString.equals("")){
    				likesString = hobbies.get(i);
            	}else{
            		likesString = likesString + "-" + hobbies.get(i);
            	}
    		}
    	}
		user.setId(String.valueOf(getMaxId()));
		user.setHobbies(likesString);
		int c = userMapper.insertNewUser(user);
		if(c>0){
			return "redirect:/Result/registerResultSuccess.html?id="+user.getId();
		}else{
			return "redirect:/Result/registerResultFail.html";
		}
	}
	
	@Override
	public String updateMessage(User user,List<String> hobbies) {
		boolean legal = true;
    	//邮箱合法
    	if(!user.getEmail().matches("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$")){
    		legal = false;
    	}
    	//年龄合法      
    	else if( user.getAge()<10 || user.getAge()>99){
    		legal = false;
    	}
    	//性别合法      
    	else if( !user.getSex().equals("男") && !user.getSex().equals("女")){
    		legal = false;
    	}
    	//地址合法      
    	else if( !MyTools.checkLength(user.getAdress(),20,3)){
    		legal = false;
    	}
    	if(!legal){
    		return "redirect:/Result/changeMessageFail.html";
    	}
    	//爱好组合
    	String likesString = "";
    	for(int i=0;i<hobbies.size();i++){
    		int hobby = Integer.valueOf(hobbies.get(i));
    		if(hobby<5 && hobby>0){
    			if(likesString.equals("")){
    				likesString = hobbies.get(i);
            	}else{
            		likesString = likesString + "-" + hobbies.get(i);
            	}
    		}
    	}
		user.setHobbies(likesString);
		int c = userMapper.updateMessage(user);
		if(c>0){
			return "redirect:/Result/changeMessageSuccess.html";
		}else{
			return "redirect:/Result/changeMessageFail.html";
		}
	}
	@Override
	public String updatePassword(User user) {
    	boolean legal = true;
    	if(!MyTools.checkLength(user.getPassword(),16,6) || !user.getPassword().equals(user.getPasswordConfirm()) || !user.getPassword().matches("^[0-9a-zA-Z_]{1,}$")){    
    		legal = false;
    	}
    	if(!legal){
    		return "redirect:/Result/changeMessageFail.html";
    	}
    	try {
    		user.setPassword(Sha1.shaEncode(user.getPassword()));
		} catch (Exception e) {
			e.printStackTrace();
		}
    	int c = userMapper.updatePassword(user);
		if(c>0){
			return "redirect:/Result/changeMessageSuccess.html";
		}else{
			return "redirect:/Result/changeMessageFail.html";
		}
	}
}
