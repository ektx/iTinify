# iTinify
基于 tinify API 图片压线功能

### 安装
`npm install -g itinify`

### 使用帮助

* tinify [文件名] [保存文件名(非必填)]   
* tinify [文件夹] [保存文件夹(非必填)]   
* tinify --key=Your_API_Key 输入KEY    
* tinify --myCount=Your_Numbers 输入数量    
* tinify --unlink 删除用户配置

### .iTinify 配置文件

此文件会在默认设置之后,保存在您的用户根目录下.



### 示例
```shell
# 压缩 abc 目录中所有图
tinify abc

# 压缩 abc 目录中所有图片且保存压缩后的图片到 def 目录中
tinify abc def

# 压缩 abc.png
tinify abc.png
# MAC 假设abc.png在 /usr/pic/abc.png
tinify /usr/pic/abc.png
# Win 假设 abc.png 在 C:\usr\pic\abc.png
tinify "c:\usr\pic\abc.png"

# 压缩 abc.jpg,并保存为 def.jpg
tinify abc.jpg def
tinify abc.jpg def.jpg

# MAC 假设abc.jpg在 /usr/pic/abc.jpg
tinify /usr/pic/abc.jpg def
tinify /usr/pic/abc.jpg def.jpg

# Win 假设 abc.jpg 在 C:\usr\pic\abc.jpg
tinify "c:\usr\pic\abc.jpg" def
tinify "c:\usr\pic\abc.jpg" def.jpg
```

### 获取API Key

你可以从 [这里](https://tinypng.com/developers) 获取API Key


