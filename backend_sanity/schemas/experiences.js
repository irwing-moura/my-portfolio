export default{
  name:'experiences',
  title:'Experiences',
  type: 'document',
  fields:[
      {
          name:'area',
          title:'Area',
          type:'string',
      },
      {
          name:'works',
          title:'Works',
          type:'array',
          of:[{ type:'workExperience'}]
      },
  ]
}