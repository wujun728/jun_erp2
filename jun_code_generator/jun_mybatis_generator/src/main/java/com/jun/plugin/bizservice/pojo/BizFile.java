package com.jun.plugin.bizservice.pojo;

import java.util.Date;

public class BizFile {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.filetype
     *
     * @mbg.generated
     */
    private String filetype;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.url
     *
     * @mbg.generated
     */
    private String url;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.filename
     *
     * @mbg.generated
     */
    private String filename;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.filepath
     *
     * @mbg.generated
     */
    private String filepath;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.uptime
     *
     * @mbg.generated
     */
    private String uptime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.createtime
     *
     * @mbg.generated
     */
    private Date createtime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column biz_file.filesize
     *
     * @mbg.generated
     */
    private String filesize;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.id
     *
     * @return the value of biz_file.id
     *
     * @mbg.generated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.id
     *
     * @param id the value for biz_file.id
     *
     * @mbg.generated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.filetype
     *
     * @return the value of biz_file.filetype
     *
     * @mbg.generated
     */
    public String getFiletype() {
        return filetype;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.filetype
     *
     * @param filetype the value for biz_file.filetype
     *
     * @mbg.generated
     */
    public void setFiletype(String filetype) {
        this.filetype = filetype == null ? null : filetype.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.url
     *
     * @return the value of biz_file.url
     *
     * @mbg.generated
     */
    public String getUrl() {
        return url;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.url
     *
     * @param url the value for biz_file.url
     *
     * @mbg.generated
     */
    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.filename
     *
     * @return the value of biz_file.filename
     *
     * @mbg.generated
     */
    public String getFilename() {
        return filename;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.filename
     *
     * @param filename the value for biz_file.filename
     *
     * @mbg.generated
     */
    public void setFilename(String filename) {
        this.filename = filename == null ? null : filename.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.filepath
     *
     * @return the value of biz_file.filepath
     *
     * @mbg.generated
     */
    public String getFilepath() {
        return filepath;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.filepath
     *
     * @param filepath the value for biz_file.filepath
     *
     * @mbg.generated
     */
    public void setFilepath(String filepath) {
        this.filepath = filepath == null ? null : filepath.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.uptime
     *
     * @return the value of biz_file.uptime
     *
     * @mbg.generated
     */
    public String getUptime() {
        return uptime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.uptime
     *
     * @param uptime the value for biz_file.uptime
     *
     * @mbg.generated
     */
    public void setUptime(String uptime) {
        this.uptime = uptime == null ? null : uptime.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.createtime
     *
     * @return the value of biz_file.createtime
     *
     * @mbg.generated
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.createtime
     *
     * @param createtime the value for biz_file.createtime
     *
     * @mbg.generated
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column biz_file.filesize
     *
     * @return the value of biz_file.filesize
     *
     * @mbg.generated
     */
    public String getFilesize() {
        return filesize;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column biz_file.filesize
     *
     * @param filesize the value for biz_file.filesize
     *
     * @mbg.generated
     */
    public void setFilesize(String filesize) {
        this.filesize = filesize == null ? null : filesize.trim();
    }
}