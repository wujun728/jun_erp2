{
  "swagger": "2.0",
  "info": {
    "description": "代码生成器,生成Dao、Service、Controller、Pojo、Feign、Swagger的JSON脚本",
    "version": "1.0.0",
    "title": "代码生成器",
    "termsOfService": "https://github.com/wujun728/jun_code_generator.git",
    "contact": {
      "email": "wujun728@hotmail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "petstore.swagger.io",
  "basePath": "/v2",
  "tags": [
    <#list swaggerPathList as sph>
    {
      "name": "${sph.model}Controller",
      "description": "${sph.model}Controller"
    }<#if ((sph_index+1)<(swaggerPathList?size))>,</#if>
    </#list>
  ],
  "schemes": [
    "http"
  ],
  "paths": {
    <#list swaggerPathList as spath>
    "${spath.path}": {
      <#list spath.methods as smethod>
      "${smethod.method}": {
        "tags": [
          "${spath.model}Controller"
        ],
        "summary": "${smethod.summary}",
        "description": "${smethod.description}",
        "operationId": "${smethod.operationId}",
        "consumes": [
          "${smethod.consumes}"
        ],
        "produces": [
          "${smethod.produces}"
        ],
        "parameters": [
          <#if smethod.swaggerParameters??>
          <#list smethod.swaggerParameters as sp>
          {
            "in": "${sp.in}",
            "name": "${sp.name}",
            "description": "${sp.description}",
            "required": ${sp.required?string("true","false")}
            <#if sp.schema??>
              ,
              "schema": {
                "$ref": "${sp.schema}"
              }
            </#if>
          }<#if ((sp_index+1)<(smethod.swaggerParameters?size))>,</#if>
          </#list>
          </#if>
        ],
        "responses": {
          <#if smethod.responses??>
          <#list smethod.responses as resp>
          "${resp.code}": {
            "description": "${resp.description}"
            <#if resp.schema??>,
            "schema": {
              "$ref": "${resp.schema}"
            }
            </#if>
          }<#if ((resp_index+1)<(smethod.responses?size))>,</#if>
          </#list>
          </#if>
        }
      }<#if ((smethod_index+1)<(spath.methods?size))>,</#if>
      </#list>
    }<#if ((spath_index+1)<(swaggerPathList?size))>,</#if>
  </#list>
  },
  "definitions": {
    "Result": {
      "type": "object",
      "required": [
        "code",
        "data",
        "flag",
        "message"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32",
          "description": "返回状态码,20000:成功,20001:失败,20002:用户名或密码错误,20003:权限不足,20004:远程调用失败,20005:重复操作,20006:没有对应的数据"
        },
        "data": {
          "type": "object",
          "description": "逻辑数据"
        },
        "flag": {
          "type": "boolean",
          "example": false,
          "description": "执行是否成功,true:成功,false:失败"
        },
        "message": {
          "type": "string",
          "description": "提示信息"
        }
      },
      "description": "Result"
    },
    <#list swaggerModels as sm>
    "Result«List«${sm.name}»»": {
      "type": "object",
      "required": [
        "code",
        "data",
        "flag",
        "message"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32",
          "description": "返回状态码,20000:成功,20001:失败,20002:用户名或密码错误,20003:权限不足,20004:远程调用失败,20005:重复操作,20006:没有对应的数据"
        },
        "data": {
          "type": "array",
          "description": "逻辑数据",
          "items": {
            "$ref": "#/definitions/${sm.name}"
          }
        },
        "flag": {
          "type": "boolean",
          "example": false,
          "description": "执行是否成功,true:成功,false:失败"
        },
        "message": {
          "type": "string",
          "description": "提示信息"
        }
      },
      "description": "Result"
    },
    "Result«${sm.name}»": {
      "type": "object",
      "required": [
        "code",
        "data",
        "flag",
        "message"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32",
          "description": "返回状态码,20000:成功,20001:失败,20002:用户名或密码错误,20003:权限不足,20004:远程调用失败,20005:重复操作,20006:没有对应的数据"
        },
        "data": {
          "description": "逻辑数据",
          "$ref": "#/definitions/${sm.name}"
        },
        "flag": {
          "type": "boolean",
          "example": false,
          "description": "执行是否成功,true:成功,false:失败"
        },
        "message": {
          "type": "string",
          "description": "提示信息"
        }
      },
      "description": "Result"
    },
    "${sm.name}": {
      "type": "${sm.type}",
      "properties": {
        <#list sm.properties as smp>
        "${smp.name}": {
          <#if smp.type??>
          "type": "${smp.type}",
          </#if>
          <#if smp.format??>
          "format": "${smp.format}",
          </#if>
          <#if smp.description??>
          "description": "${smp.description}"
          </#if>
        }<#if ((smp_index+1)<(sm.properties?size))>,</#if>
        </#list>
      },
      "description": "${sm.name}"
    }<#if ((sm_index+1)<(swaggerModels?size))>,</#if>
    </#list>
  },
  "externalDocs": {
    "description": "黑马训练营畅购微服务商城(http://www.itheima.com)",
    "url": "https://github.com/shenkunlin/code-template.git"
  }
}