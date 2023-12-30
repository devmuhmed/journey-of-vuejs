<template>
  {{ greet }} {{ name }}
  <div v-text="channel"></div>
  <div v-html="test"></div>
  <h2 :id="HeadingId">Heading</h2>
  <button :disabled="isDisabled">Bind</button>
  <h2 class="underline" :class="status">Status</h2>
  <h2 :class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h2 :class="isSoldout ? 'sold-out' :'new'">Soldout ? movie</h2>
  <h2 :class="['new', 'promoted']">Newly Promoted movie</h2>
  <h2 :class="[isPromoted && 'promoted', isSoldout ? 'sold-out': 'new']">Array conditional movie</h2>
  <h2 :class="{
    promoted: isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout
  }">Object conditional movie</h2>

  <h2 :style="{
    color: highlightColor,
    fontSize: headerSize + 'px' //fontSize camel case or 'font-size': headerSize + 'px' kipap case 
  }">Inline Style</h2>
  
  <h2 :style="headerStyleObject">Style Object</h2>
  <h2 :style="[baseStyleObject, successStyleObject]">Success Style</h2>
  <h2 :style="[baseStyleObject, dangerStyleObject]">Danger Style</h2>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      greet: 'hello',
      name:'Mohamed',
      channel: 'codevolution',
      test: '<b>test</b>',
      HeadingId: 'heading',
      isDisabled: true,
      status: 'danger',
      isPromoted: true,
      isSoldout:true,
      highlightColor: 'orange',
      headerSize: 50,
      headerStyleObject: {
        color: 'orange',
        fontSize: '50 px',
        padding: '20 px',
      },
      baseStyleObject: {
        fontSize: '50px',
        padding: '10px',
      },
      successStyleObject: {
        color: 'green',
        backgroundColor: 'lightgreen',
        border: '1px solid green', 
      },
      dangerStyleObject: {
        color: 'darkred',
        backgroundColor: 'red',
        border: '1px solid darkred', 
      },
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab
}

.sold-out {
  color: red;
}
</style>
