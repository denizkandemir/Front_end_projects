async function runAsync() {
  try {
    await Promise.reject(Error("Error has occured"))
  } catch (error) {
    console.log(error);
  }
}

//try bloğunun içindeki promise çalışmaz ve reject olur ise, catch bloğu gelen error u yazdıracak

async function getGithubUser(userName) {
  const userContainer = document.createElement("div");
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const user = await response.json();
    userContainer.innerHTML = `<div class="user-information-container">
                                 <h2 class="user-title">${user.name}</h2>
                                 <img class="user-image" src="${user.avatar_url}"/>
                                 <a href="${user.html_url}" target="blank" class="user-link">Github Link</a>
                                 <p class="user-bio">${user.bio}</p>
                               </div>`;
    document.body.appendChild(userContainer)                           
} catch (error) {
    console.log(error);
  }

}

getGithubUser("bartusiraci");