package com.mypack.tools;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.springframework.web.multipart.MultipartFile;

public class MyTools {

	//生成ID
    public static String changeId(String[] idArr,String tempId ){
    	if(idArr.length == 1){
    		if(idArr[0].equals(tempId)){
    			return "";
    		}else{
    			return idArr[0];
    		}
    	}
    	String changeId = null;
    	int now = 0;
    	boolean start = true;
    	for(int i=0;i<idArr.length;i++){
    		if(idArr[i].equals(tempId)){
    			idArr[i]="";
    			if(i==0){
    				now =1;
    			}
    		}else{
    			if(start){
    				changeId = idArr[now];
    				start = false;
    			}else{
    				changeId = changeId + "-" + idArr[i];
    			}
    		}
    	}
    	return changeId;
    }
    
  //检测长度
    public static boolean checkLength(String str,int max,int min){
    	int length = str.length();
    	if(length<=max && length>=min){
    		return true;
    	}else{
    		return false;
    	}
    }
    //存储图片
    public static String saveImgs(List<MultipartFile> messImages,String itemPath,String imgsPath){
		itemPath = itemPath.replace("\\", "/");
		imgsPath = imgsPath.replace("\\", "/");
		String urls = "";
	    for(int i=0;i<messImages.size();i++){
	    	MultipartFile file = messImages.get(i);
	    	String fileName = file.getOriginalFilename();
	    	String suffix = fileName.substring(fileName.lastIndexOf("."));
	    	String uuid = UUID.randomUUID().toString().replace("-", "");
	        String dataString = new SimpleDateFormat("yyyy_MM_dd").format(new Date());	        
	    	try {
	    		String url_file = "contentImg/"+dataString+"/"+uuid+suffix;
				FileUtils.copyInputStreamToFile(file.getInputStream(), new File(itemPath+url_file));
				FileUtils.copyInputStreamToFile(file.getInputStream(), new File(imgsPath+url_file));
				String url_db = "/"+dataString+"/"+uuid+suffix;
				if(i==messImages.size()-1){
					urls+=url_db;
				}else{
					urls+=url_db+"-";
				}
			} catch (IOException e) {
				e.printStackTrace();
				return "";
			}
	    }
	    //System.out.println(urls);
	    return urls;
	}
    
    ////用正则表达式实现html转码
    public static String  htmlEncode(String str){
    	String s = "";
        if(str.length() == 0) return ""; 
        s = str.replace("&","&amp;");
        s = s.replace(" ","&nbsp;");
        s = s.replace("<","&lt;");
        s = s.replace(">","&gt;");
        s = s.replace("'","&#39;");
        s = s.replace("\"","&quot;");
        s = s.replace("\n","\\\\n");
        s = s.replace("\r","\\\\r");
        return s;
    }
    //密保id-问题映射
    public static String map_pwd_Q(String num){
    	if(num==null){
    		return "null";
    	}
    	if(num.equals("1")){
    		return "我的第一个学校什么名字？";
    	}else if(num.equals("2")){
    		return "我的初中班主任什么名字？";
    	}else if(num.equals("3")){
    		return "我的高中班主任什么名字？";
    	}else if(num.equals("4")){
    		return "我的大学班主任什么名字？";
    	}else if(num.equals("5")){
    		return "我第一次工作在哪里？";
    	}else if(num.equals("6")){
    		return "我第一次谈恋爱什么感觉？";
    	}else if(num.equals("7")){
    		return "我买的第一辆车什么牌子？";
    	}else if(num.equals("8")){
    		return "我最喜欢哪个地方？";
    	}else{
    		return "null";
    	}
    }
}
