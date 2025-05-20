const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");

describe("UserService", () => {
  //로그인 함수를 목킹함
  const login = jest.fn(async () => "success");
  //UserClient 전체를 목킹해서 login 하면 위의 목함수와 연결되도록 만들었다.
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserService());
    login.mockClear();
    UserClient.mockClear();
  });
});
