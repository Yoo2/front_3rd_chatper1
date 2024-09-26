import UserStore from "../UserStore";

const pageTemplate = `
  <main class="p-4">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
      <form id="profile-form">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
          <input type="text" id="username" name="username" value="" class="w-full p-2 border rounded">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
          <input type="email" id="email" name="email" value="" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
          <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
      </form>
    </div>
  </main>
`;

function setupPage() {
  const store = new UserStore();
  const user = JSON.parse(localStorage.getItem("user"));
  const usernameInput = document.querySelector("#username");
  const emailInput = document.querySelector("#email");
  const bioTextarea = document.querySelector("#bio");

  usernameInput.value = user.username;
  emailInput.value = user.email;
  bioTextarea.value = user.bio;

  const form = document.querySelector("#profile-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    store.setState({
      username: usernameInput.value,
      email: emailInput.value,
      bio: bioTextarea.value,
    });
  });
}

export default { pageTemplate, setupPage };
