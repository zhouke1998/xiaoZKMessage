package com.mypack.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.BeansException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.multipart.MultipartFile;
import com.alibaba.fastjson.JSONArray;
import com.mypack.model.Content;
import com.mypack.service.ContentService;
import com.mypack.tools.MyTools;

@Controller
public class ContentController implements ServletContextAware{
	@Resource
	private ContentService contentServiceImpl;
	
	@Override
	public void setServletContext(ServletContext arg0) throws BeansException {
		int total = contentServiceImpl.queryAll();
		arg0.setAttribute("total",total);
		String itemPath=arg0.getRealPath("/");
    	String imgsPath = itemPath.substring(0,(itemPath.substring(0,itemPath.length()-1)).lastIndexOf("\\")+1);
    	arg0.setAttribute("imgsPath",imgsPath);
	}
	
	@RequestMapping("/ajax/QueryAllNum")
	@ResponseBody
	public int queryAllNum(HttpServletRequest req){
		int total = (Integer)req.getServletContext().getAttribute("total");
    	return total;
    }
	
	@RequestMapping("/ajax/QueryFirstPage")
	@ResponseBody
	public JSONArray QueryFirstPage(){
		
		JSONArray arr = contentServiceImpl.queryPage(1);
		return arr;
    }
	
	@RequestMapping("/ajax/QueryPage")
	@ResponseBody
	public JSONArray QueryPage(int pageNum){
		
		return contentServiceImpl.queryPage(pageNum);

    }
	
	@RequestMapping(value="/ajax/writeMessage",method=RequestMethod.POST)
	@ResponseBody
	public String writeMessage(HttpServletRequest req,Content content,@RequestParam("messImages")List<MultipartFile> messImages) throws UnsupportedEncodingException{
		String username = (String)req.getSession().getAttribute("user");
    	if(username == null){
    		return "0";
    	}
    	int length = content.getContent().length();
    	if(length<1 || length>999){
    		return "2";
    	} 
    	String itemPath=(String)req.getSession().getServletContext().getRealPath("/");
    	String imgsPath = (String)req.getSession().getServletContext().getAttribute("imgsPath");
    	if(messImages!=null && messImages.size()>0){
    		content.setImg_urls(MyTools.saveImgs(messImages,itemPath,imgsPath));
    	}
    	content.setContent(MyTools.htmlEncode(URLDecoder.decode(content.getContent(), "UTF-8")));
    	content.setUserId((String)req.getSession().getAttribute("id"));
    	content.setTime(new Date());
    	int num = contentServiceImpl.insertMessage(content);
    	if(num>0){
    		int total = (Integer)req.getServletContext().getAttribute("total");
    		total++;
    		req.getServletContext().setAttribute("total", total);
    		return "1";
    	}
    	return "0";
    }
	
	@RequestMapping("/ajax/QueryVisitorMessageNum")
	@ResponseBody
	public int QueryVisitorMessageNum(String N){//查询留言的总个数
    	if(N == null){
    		return 0;
    	}
    	int total = contentServiceImpl.QueryPersonalMessageNum(N);
    	return total;
    }
	
	@RequestMapping("/ajax/QueryVisitorFirstPage")
	@ResponseBody
	public JSONArray QueryVisitorFirstPage(String N){//查询访问者首页的留言
    	return contentServiceImpl.QueryPersonalPage(N, 1);
    }
		
	@RequestMapping("/ajax/QueryVisitorPage")
	@ResponseBody
	public JSONArray QueryVisitorPage(String N,String page){//查询访问者的具体某页的留言
    	int pageNum = Integer.valueOf(page);
    	JSONArray json = contentServiceImpl.QueryPersonalPage(N,pageNum);
    	return json;
    }
	
	@RequestMapping("/ajax/QueryPersonalMessageNum")
	@ResponseBody
	public int QueryPersonalMessageNum(HttpServletRequest req){//查询访问者首页的留言
		String N = (String)req.getSession().getAttribute("user");
		if(N == null){
    		return 0;
    	}
    	int total = contentServiceImpl.QueryPersonalMessageNum(N);
    	return total;
    }
	
	@RequestMapping("/ajax/QueryPersonalFirstPage")
	@ResponseBody
	public JSONArray QueryPersonalFirstPage(HttpServletRequest req){//查询访问者首页的留言
		String N = (String)req.getSession().getAttribute("user");
		if(N == null){
    		return null;
    	}
    	return contentServiceImpl.QueryPersonalPage(N, 1);
    }
	
	@RequestMapping("/ajax/QueryPersonalPage")
	@ResponseBody
	public JSONArray QueryPersonalPage(String page,HttpServletRequest req){//查询访问者的具体某页的留言
		String N = (String)req.getSession().getAttribute("user");
		if(N == null){
    		return null;
    	}
    	int pageNum = Integer.valueOf(page);
    	JSONArray json = contentServiceImpl.QueryPersonalPage(N,pageNum);
    	return json;
    }
	
	@RequestMapping("/ajax/deleteMessage")
	@ResponseBody
	public String deleteMessage(Content content,HttpServletRequest req){//查询访问者的具体某页的留言
		String userId = (String)req.getSession().getAttribute("id");
    	if(userId == null){
    		return "0";
    	}
    	content.setUserId(userId);
    	int c = contentServiceImpl.deleteMessage(content);
    	if(c>0){
    		int total = (Integer) req.getServletContext().getAttribute("total");
    		total--;
    		req.getServletContext().setAttribute("total", total);
    		return "1";
    	}
    	return "0";
    }   
}
