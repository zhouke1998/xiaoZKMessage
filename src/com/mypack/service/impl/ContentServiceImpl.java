package com.mypack.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mypack.mapper.ContentMapper;
import com.mypack.model.Content;
import com.mypack.service.ContentService;
@Service
public class ContentServiceImpl implements ContentService{
	@Resource
	private ContentMapper contentMapper;
	@Override
	public int queryAll() {
		return contentMapper.queryAll();
	}
	@Override
	public JSONArray queryPage(int page) {
		int start = (page-1)*10;
		List<Content> list = contentMapper.queryPage(start);
		JSONArray array = new JSONArray();
        for(Content b : list){
            JSONObject json = (JSONObject) JSON.toJSON(b);
            array.add(json);
        }
        return array;
	}
	@Override
	public int insertMessage(Content content){
		return contentMapper.insertMessage(content);
	}
	
	@Override
	public int QueryPersonalMessageNum(String name){
		return contentMapper.QueryPersonalMessageNum(name);
	}
	
	@Override
	public JSONArray QueryPersonalPage(String name, int page){
		int start = (page-1)*10;
		Map<String, Object> map = new HashMap<>();
		map.put("name", name);
		map.put("start", start);
		List<Content> list = contentMapper.QueryPersonalPage(map);
		JSONArray array = new JSONArray();
        for(Content b : list){
            JSONObject json = (JSONObject) JSON.toJSON(b);
            array.add(json);
        }
        return array;
	}
	@Override
	public int deleteMessage(Content content) {
		return contentMapper.deleteMessage(content);
	}
}
