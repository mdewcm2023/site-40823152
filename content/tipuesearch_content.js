var tipuesearch = {"pages": [{'title': 'About', 'text': '四設計四甲 \n 40823152 | 黃暐翰 \n \n 個人倉儲: github \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w1-w3', 'text': '\n', 'tags': '', 'url': 'w1-w3.html'}, {'title': 'Useing\xa0a portable system', 'text': 'Step 1 \n Go to the website  mde.tw , Find the  \xa0 Python3108_for_2023.7z \xa0, unzip it and put it in a USB flash drive. \n \n \n \n Step 2 \n \n Open  Python3128_for_2023  file and double-click start_ipv4.bat,y ou can use the editing environment now. \n \n \n \n Example compilation of Python program.  \n Find  hello.py  located in E:\\wcm\\Python3108_for_2023\\data\\tmp\\py_ex, and run the program using the Scite editing environment by clicking on "Tools" -> "Go". \n \xa0 \n \n \n \n But the version of Python is outdated. Therefore, let\'s start setting up our own environment! \n \n \n \n Python various versions \n', 'tags': '', 'url': 'Useing\xa0a portable system.html'}, {'title': 'Create a new portable system', 'text': 'Step 1:  \n Find the  gen_portable_python.py  file located at E:\\wcm\\Python3108_for_2023\\data\\tmp\\py_ex, and open the file using the Scite editing environment. \n \n \n Step 2 \n Confrim vision\xa0 "3.11.2", and Translation: Confirm the location where Python is stored\xa0,Ex:"E:\\wcm\\wcm2023_test2\\data\\Python311" .\xa0 \xa0 \xa0 \xa0 \xa0 "\\": the root directory. \n \n \n Step 3 \n Run the program using the Scite editing environment by clicking on "Tools" -> "Go",\xa0You can see that the Python311 file has been added to the USB drive. \n \n \n Step 4 \n Put the  Start.bat  and \xa0 Stop.bat  into this wcm2023_test2 folder, Creat the home_ipv4, home_ipv6, tmp folder. \n \n \n Step 5 \n  Download the  Full 64-bit download \xa0 (2.3M)\xa0 zip file from the  SciTE  official website, Unzip the file and put it into E:\\wcm\\wcm2023_test2\\data folder. Finial rename the name "wscite" to "wscite535". \n \n \n \n \n Step 6 \n \n \n \n \n \n \n In the Python3108_for_2023 environment, open start_ipv4.bat using Scite, r ename the file with the name of the latest version,\xa0For example, the area marked with a red line. \n \n \n \n \n \n \n \n \n \n Step 7 \n 1.Edit python.properties and change line 153 to: python.command=pythonw  \n 2.Edit SciTEGlobal.properties and change line 162 to: load.on.activate=1 (if the file being edited is modified in other applications, it can be automatically loaded in SciTE) \n 3.Edit SciTEGlobal.properties and change line 204 to: tabsize=4  \n 4.Edit SciTEGlobal.properties and change line 205 to: indent.size=4 Remove the # symbol on line 335 (code.page=65001, indicating that the editing area uses UTF-8 encoding) Comment out line 336 with the # symbol (code.page=0, indicating that the system\'s Chinese encoding, i.e. big-5, should be used) \n \n \n \n \n \n Step 8 \n C ompleted the environment, write a simple code to test, for example, \'print("hi")\'. \n \n \n \n', 'tags': '', 'url': 'Create a new portable system.html'}, {'title': 'W9', 'text': 'get score \n \n 1aw5.txt \n 1aw6.txt \n 1aw6-2.txt \n 1aw8.txt \n 1aw9.txt \n \n \n \n step1 \n 利用Byrhon 讀取url中的資料 \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\n#讀取url取掉跳行\ndata = open(url).read().split("\\n")       \ndata = data[1:]\nfor i in data:\n    #print(i)\n    # \':\' 隔開取第一位\n    stud = i.split(":")[0]\n    # \':\' 隔開取第二位\n    score =  i.split(":")[1]\n    print(stud, score) \n \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'Bython reads exam scores', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n get score \n \n 1aw5.txt \n 1aw6.txt \n 1aw6-2.txt \n 1aw8.txt \n 1aw9.txt \n \n \n \n \n 1aW5 1aW6 1aW6-2 1aW8  1aW9  \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n', 'tags': '', 'url': 'Bython reads exam scores.html'}, {'title': 'W10~W12', 'text': '', 'tags': '', 'url': 'W10~W12.html'}, {'title': 'w10', 'text': '\n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'www web', 'text': 'http://192.168.1.24/content/index.html \xa0 \n \n \n \n \n \n   server {\n        listen       80;\n        # ip 位置(要同區段網域，如192.168.1.xx)\n        server_name  192.168.1.24;\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        location / {\n            #  site路徑設定\n            root   site/ ;\n            index  index.html index.htm;\n        }', 'tags': '', 'url': 'www web.html'}, {'title': 'W11', 'text': 'OBS_Studio \n \n This is open OBS and start recording using a obs.bat file. \n \n \n This is about obs.bat \n \n @echo off\n\ncd Y:\\obs\\bin\\64bit\n\nstart  obs64.exe\n\n\n \n \n \n This is\xa0 use obs to output the video .', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': 'stud2.cycu.org \n \n stud2.cycu.org \n \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13~W15', 'text': '', 'tags': '', 'url': 'W13~W15.html'}, {'title': 'W13', 'text': "\n stud2.cycu.org:8005 environment. \n https://stud2.cycu.org:8005 \n \n \n \n \n \n \n \n Linux\xa0 vi instruction \n J上, K下\nH左, L右 \nEsc or Ctrl+c 離開  \no 跳到下行'~'\n:wq編輯好 \n \n Linux\xa0 \n pwd    列出目前位置\nls -1    列出檔案\nls -1a  列出所有檔案\ncat ' '   顯示' '檔案內的內容\n \n \n \n", 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': 'Web Content Management System : \n \n https://github.com/mdecycu/cmsimde \n 近端動態與靜態網站 (依賴可攜環境啟動) - 特性為可以在不上網的環境中維護協同專案內容 ( Solvespace , \xa0 Solid Edge Community Edition, \xa0 CAE Femap Student Edition ), 資料保全度較差. \n 中端動態與靜態網站 (透過可攜程式系統與操作系統的設定, 建立自主伺服器, \xa0 wsgi , \xa0 www ) - 特性為可自行管理, 沒有單一檔案的上傳容量限制, 分散式版次管理可以自行建立 \xa0 Git Server \xa0 或使用 \xa0 Fossil SCM ), 資料保全度介於近端與雲端間. \n 雲端靜態網站 (透過 \xa0 Github Pages \xa0 建立倉儲的靜態網站) - 特定為資料保全度最佳. \n 雲端動態 - \xa0 Replit \xa0 可與 Github 倉儲同步. \n \n \n \n Solvespace \n \n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'Solvespace', 'text': '\n \n Solvespace introduce: \n Creating a new plane :\xa0 A point / a point and two line segments / Workplane\xa0 ->\xa0 Nwe Group -> Skech\xa0 In New Workplane \n \n Cutout : New group extruding active sketch -> solid model as -> difference \n \n \n 3D cylinder\xa0\xa0 \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'w15', 'text': '\n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'Replit', 'text': '\n Replit :\xa0 url \n \n \n \n github\xa0 :\xa0 url \n \n Github_new_repository \n Github -> New(Top Respositorie) -> Repository name -> create\xa0 \xa0repository \n \n \n github repository \n git init\ngit add README.md\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin https://github.com/40823152/w15.git\ngit push -u origin main \n \n \n \n To create a new repository on GitHub, follow these steps: \n \n \n Sign in to your GitHub account. If you don\'t have an account, you can create one for free at  https://github.com/join . \n \n \n Once signed in, click on the "+" button in the top-right corner of the GitHub interface. A dropdown menu will appear. \n \n \n From the dropdown menu, select "New repository." You will be taken to the "Create a new repository" page. \n \n \n On the "Create a new repository" page, provide the following information: \n \n Repository name: Choose a unique and descriptive name for your repository. \n Description (optional): Add a brief description to help others understand the purpose of your repository. \n Visibility: Choose whether you want your repository to be public (visible to everyone), private (visible only to you and collaborators you specify), or internal (visible to members of your organization). \n Initialize this repository with a README: If you want to include a README file, which is helpful for providing project information, instructions, or documentation, check this option. \n Add .gitignore: If your project requires ignoring certain files or directories (e.g., logs, dependencies, or build artifacts), select the appropriate .gitignore template. \n Choose a license (optional): If you want to specify a license for your repository, choose one from the provided options. \n \n \n \n Once you have filled in the necessary information, click on the "Create repository" button at the bottom of the page. \n \n \n Congratulations! You have successfully created a new repository on GitHub. You can now start adding files, making commits, and collaborating with others on your project. \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'replit_new_repository', 'text': '\n Create a Repl ->\xa0 Template \'Python\' ->\xa0Title \'name\'\xa0 ->\xa0Create a Repl \n \n The following image shows the screenshot after successfully creating a repository on Replit. \n \n \n \n To create a new repository on Replit, you can follow these steps: \n \n \n Sign in to your Replit account. If you don\'t have an account, you can create one for free at  https://replit.com/signup . \n \n \n Once signed in, you will be taken to your Replit dashboard. Click on the "+" button in the top-right corner of the interface. A dropdown menu will appear. \n \n \n From the dropdown menu, select "New Repl." You will be taken to the "Create a new repl" page. \n \n \n On the "Create a new repl" page, provide the following information: \n \n Choose a language: Select the programming language you want to use for your repository. Replit supports a wide range of programming languages and frameworks. \n Choose a template (optional): If you want to start with a pre-configured template or framework, you can select one from the provided options. This step is optional, and you can also start with a blank repl. \n Give your repl a name: Choose a unique and descriptive name for your repository. \n \n \n \n Once you have filled in the necessary information, click on the "Create Repl" button at the bottom of the page. \n \n \n Congratulations! You have successfully created a new repository (repl) on Replit. You can now start coding, adding files, and collaborating with others on your project. \n', 'tags': '', 'url': 'replit_new_repository.html'}, {'title': 'W16', 'text': 'w16 則可以反向利用已經建立 cmsimde 網站的倉儲 (使用 \xa0 cmsite \xa0 或 \xa0 cmsimde_site \xa0 (or \xa0 cmsimde_site ) 作為 template), 以 import 的方式導入 Replit 後執行動態網站, 也可以達到利用 Replit 維護 Github Pages 網站的目的. 但必須特別注意, 首次從 github import 倉儲至 Replit, 必須點選連結 Replit 與 Github 授權後才可順利完成兩個網站的導入與內容維護. 之後的網站維護必須利用 Replit Tools 中的 Git 工具完成 git add 與 commit, 然後才能在 Shell 執行 git push, 與 w15 的差異為無需自行設定 .git/config 中的授權 token, 而是透過 Replilt 與 Github 帳號間的授權進行兩端資料的同步. \n 利用 Replit 與 Github 進行動態網站與靜態網站的整合: \n w16:\xa0 https://w16.scrum3.repl.co \xa0 ( https://github.com/scrum-3/w16 ,\xa0 https://scrum-3.github.io/w16 ) \n w15: \xa0 https://w15.scrum3.repl.co \xa0 ( https://github.com/scrum-3/w15 , \xa0 https://scrum-3.github.io/w15 ) \n \n', 'tags': '', 'url': 'W16.html'}, {'title': 'w16_replit', 'text': '\n replit :\u3000 https://replit.com/@40823152/w16 \n github :  repo \n github-pages :\xa0\xa0 https://40823152.github.io/w16/content/index.html \xa0 \n \n \n \n \n', 'tags': '', 'url': 'w16_replit.html'}, {'title': 'get_Meteorological_data', 'text': '\n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n \n get_Meteorological_dat \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n', 'tags': '', 'url': 'get_Meteorological_data.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '0. for 1+10', 'text': '\n 1加到10 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n', 'tags': '', 'url': '0. for 1+10.html'}, {'title': '1. Bython reads exam scores', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n 1aw5.txt \n 1aw6.txt \n 1aw6-2.txt \n 1aw8.txt \n 1aw9.txt \n \n \n 1aW5 1aW6 1aW6-2 1aW8  1aW9  \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': '1. Bython reads exam scores.html'}, {'title': '2. get_Meteorological_data', 'text': '\n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n \n get_Meteorological_dat \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n', 'tags': '', 'url': '2. get_Meteorological_data.html'}, {'title': 'test', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n', 'tags': '', 'url': 'test.html'}, {'title': 'test2', 'text': '', 'tags': '', 'url': 'test2.html'}, {'title': 'Notes', 'text': '權限 \n .git config \n \n 提交 \n git commit -m /\xa0 m-> message \n \n', 'tags': '', 'url': 'Notes.html'}, {'title': 'Fault', 'text': '', 'tags': '', 'url': 'Fault.html'}, {'title': 'Deploy to GitHub Pages', 'text': '\n Problem: \n Encountered a problem while deploying GitHub Pages. \n We can see in the image below that the deployment was unsuccessful. \n \n \n So, I clicked on the URL provided when the error occurred. \n error occurred URL: \n https://pipelines.actions.githubusercontent.com/Hw3e2PMeyWV2jEBbDPrdBukQyp2Y4L1NLtiVjVuuDxGPGj0j0I/_apis/pipelines/workflows/4411085700/artifacts?api-version=6.0-preview \n \n We can see in the information below that it says "unauthorized to access this resource." \n {"$id":"1","innerException":null,"message":"The user \'System:PublicAccess;aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa\' is not authorized to access this resource.","typeName":"Microsoft.TeamFoundation.Framework.Server.UnauthorizedRequestException, Microsoft.TeamFoundation.Framework.Server","typeKey":"UnauthorizedRequestException","errorCode":0,"eventId":3000} \n \n \n So, I created a new token to gain access. \n Token: https://github.com/settings/tokens?page=1 \n Tokem introduce: \n Tokens you have generated that can be used to access the\xa0 GitHub API . \n \n \n To create a Personal Access Token (classic) in GitHub, please follow these steps: \n \n \n \n Login to your GitHub account and click on your profile picture in the top right corner. \n \n \n Select " Settings " from the dropdown menu. \n \n \n From the left-hand menu, choose " Personal access tokens." \n \n \n Click on the " Generate new token " button. \n \n \n In the " Token description " field, enter a description that will help you identify the purpose of this token. \n \n \n Choose the necessary permissions for the token. For example, you may need to select the  "repo"  scope to access repositories. \n \n \n Once you\'ve selected the permissions, click on the " Generate token " button. \n \n \n Your token will be generated, and you will be shown the token value. \n \n \n Copy the token and store it in a secure place, as GitHub will not display the token value again. \n \n \n That\'s it! You can now use the token to access GitHub APIs or perform actions that require authentication. \n \n \n', 'tags': '', 'url': 'Deploy to GitHub Pages.html'}, {'title': 'invalid path', 'text': "\n Problem: \n I suspect the issue is that the path contains a : which is illegal on Windows. \n If the following error message appears: \n \n error: invalid path 'configs/perl-modules/DIST.64/perl-HTML-Tree-1:5.03-1.el6.noarch.rpm' \n \n solution web :  error: invalid path \n You can use the following command to fix it. \n git config core.protectNTFS false \n You can use the following command to\xa0 ignoring the rules and pushing \n  git push -f \n \n Summarize: \n The teacher said that the problem arises from the program coding. It is because the title is in a pagination mode, and if a period  ' . '  is included in the title, it triggers other functions, resulting in the error.", 'tags': '', 'url': 'invalid path.html'}]};