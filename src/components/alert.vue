<template>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {{message}}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</template>

<script>
export default {
  name: 'alert',
  props: ['message']
}
</script>

<style>
    .fade{
        opacity: unset;
    }
    .alert-warning{
        background-color: #b6d3b7;
        color:#6d5121;
    }
    .show{
        font-size: 18px;
        text-align: center;
    }
</style>