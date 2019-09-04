function getData(cb) {
  const clientId = 'pv5emcr029nlrokiw16n0uh5awus0h';
  const limit = 20;

  $.ajax({
    url: 'https://api.twitch.tv/kraken/streams/?client_id' + clientId + '&game=League%20of%20Legends' + limit ;
    sucess: (response) => {
      console.log(response);
      cb(null, response);
    }
  })
}

getData((err, data) => {
  const { streams } = data;
  const $row = $('.row');
  for (var i = 0; i < streams.length; i++) {
    $row.append(getColumn(streams[i]);
  }
});


function getColumn(data) {
  return `
  <div class='col'>
    <div class='preview'>
      <div class='placeholder'></div>
      <img src='${stream.preview.medium}' onload='this.style.opacity=1'/>
    </div>
    <div class='bottom'>
      <div class="avatar">
        <img class='avatar_img' src='${stream.channel.logo}' />
      </div>
      <div class='intro'>
        <div class='channel_name'>${stream.channel.display_name}</div>
        <div class='owner_name'>${stream.channel.name}</div>
      </div>
    </div>
  </div>  
  `
}