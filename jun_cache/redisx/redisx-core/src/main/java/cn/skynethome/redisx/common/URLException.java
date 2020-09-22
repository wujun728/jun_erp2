package cn.skynethome.redisx.common;

/**
  * 项目名称:[redisx]
  * 包:[cn.skynethome.redisx.common]    
  * 文件名称:[URLException]  
  * 描述:[一句话描述该文件的作用]
  * 创建人:[陆文斌]
  * 创建时间:[2017年1月3日 上午11:36:49]   
  * 修改人:[陆文斌]   
  * 修改时间:[2017年1月3日 上午11:36:49]   
  * 修改备注:[说明本次修改内容]  
  * 版权所有:luwenbin006@163.com
  * 版本:[v1.0]
 */
public class URLException extends Exception
{

    private static final long serialVersionUID = 1L;
    
    public URLException()
    {
        super();
    }
    
    public URLException(String msg)
    {
        super("URL is not allowed to empty,URL is "+msg);
    }
    
  
    
}