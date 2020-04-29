var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    client: judgeClient(),
  },
  computed: {
  }
})



/*判断客户端*/
function judgeClient() {
  let client = '';
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
    client = 'iOS';
  } else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
    client = 'Android';
  } else {
    client = 'PC';
  }
  return client;
}
