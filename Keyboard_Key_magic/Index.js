const Insert = document.getElementById("insert")

window.addEventListener("keydown", (e)=>{
    Insert.innerHTML = `
    <div id="color">
        <table style="width: 100%; border-collapse: collapse; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background-color: #4CAF50; color: white; text-align: left;">
      <th style="padding: 15px; font-weight: 600; border-bottom: 2px solid #3d8b40;">Key</th>
      <th style="padding: 15px; font-weight: 600; border-bottom: 2px solid #3d8b40;">Code</th>
      <th style="padding: 15px; font-weight: 600; border-bottom: 2px solid #3d8b40;">keycode</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff; border-bottom: 1px solid #eeeeee;">
      <td style="padding: 12px 15px; color: #333333;">${e.key == " " ? "Space" : e.key  }</td>
      <td style="padding: 12px 15px; color: #555555;">${e.code}</td>
      <td style="padding: 12px 15px; color: #555555;">${e.keyCode }</td>
    </tr>
    
  </tbody>
</table>
    </div>
    `
})