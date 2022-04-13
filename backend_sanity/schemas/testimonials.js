export default {

  name:'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string'
    },
  ]

}