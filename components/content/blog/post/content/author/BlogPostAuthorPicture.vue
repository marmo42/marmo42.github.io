<template>
  <Image page="blog" :path="path" class="w-10 h-10 !my-0 mr-3 !rounded-full"/>
</template>

<script>
export default {
  props: {
    author: String
  },
  setup(props) {
    const nameToID = useNameToID();
    const author = props.author;

    const id = nameToID(author);

    return { id }
  },
  computed: {
    path() {
      return 'authors/' + this.id + '.png'
    }
  }
}
</script>
