// 生成最终落库数据
const saveTemplate = function(_this){
  let res = {
    Metadata: {},
    node_templates: []
  }
  res.Version = _this.baseProperties.data.version
  res.Description = _this.baseProperties.data.description
  res.Metadata.Designer = _this.diagramData.nodeDataArray
  res.Metadata.Relationships = _this.diagramData.linkDataArray

  for (let item of _this.diagramData.nodeDataArray) {
    let node_temp = {}
    node_temp.id = item.key
    node_temp.type = item.type
    node_temp.category = item.category

    if (_this.node_templates.hasOwnProperty(item.key)) {
      node_temp.properties = _this.node_templates[item.key].data
    } else {
      node_temp.properties = {}
    }
    res.node_templates.push(node_temp)
  }
  console.log(JSON.stringify(res))
}

export const visualEditor = {
  saveTemplate
}
