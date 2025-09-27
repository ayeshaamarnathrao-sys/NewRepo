//"https://jsonplaceholder.typicode.com/posts"
const {
  test, expect, request
} = require("@playwright/test");// request - to hit api, assert - expect, to write test case - test. should pick from playwright package
const { log } = require("console");

//test.describe is to club related test cases under one suite
test.describe("test case title", () => {
  console.log("executed");
  let BaseUrl = null
  test.beforeAll(async () => {
    //it will create a browser instance
    BaseUrl = await request.newContext({
      baseURL: "https://jsonplaceholder.typicode.com"
    });
  })
  test("get post data", async () => {
    console.log(BaseUrl);
    
    const respose = await BaseUrl.get("/posts")
    const data = await respose.json()
    console.log(data);
    //ways to check the response using assert i.e except().toBeTruthy it checks boolean other than null,false,undefined
    //expect(respose.ok()).toBeTruthy();
    //expect(respose.ok()).toBeFalsy();// result: it will fail - as the compaired value is true.
    expect(respose.status()).toBe(2000);//except(200).toBe(200) - if 200 == 200
  })
})
//assignment = inside response print only id : 6 after fetching, assert it should not be false and check id is 6
