  let logoSide=document.querySelector(".logoside");
  if(logoSide){
    // const logoSide = document.querySelector(".logo");
    const outer= document.createElement("div");
    outer.setAttribute("class","outer");
    logoSide.insertAdjacentElement("afterend", outer);
    console.log("outer", outer);
    // https://i.postimg.cc/RhDXK0jc/icon.png
    outer.innerHTML= `
      <div class="container">
        <div class="icon">
          <button type="button" class="btn-toggler">
            <img src="https://i.postimg.cc/gJQTnV0m/logo-1.png" alt="..."/>
          </button>
        </div>
        <div class="WP">
          <button type="button" class="btn-toggler">
            WP
            <span class="arrow"></span>
          </button>
          <div class="dropdown">
            <ul class="">
              <li class="dropdown-item">
                <button type="button" class="btn-copy">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>
                </button>
                <button type="button" class="btn-past">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80V400c0 26.5 21.5 48 48 48H192V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48H215.4C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48V448v16c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V256H416c-17.7 0-32-14.3-32-32V128H320 272zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm256 88v96h96l-96-96z"/></svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="comment">
          <button type="button" class="btn-toggler">
            comment
          </button>
        </div>
        <div class="symbols">
          <button type="button" class="btn-toggler">
            tick marks
            <span class="arrow"></span>
          </button>
          <div class="dropdown">
            <ul class="">
              <li class="dropdown-item">
                <button type="button" class="tick-mark-btn" data-value="MV">MV</button>
                <span class="middle"></span>
                <button type="button" class="tick-mark-btn" data-value="O">O</button>
              </li>
              <li class="dropdown-item">
                <button type="button" class="tick-mark-btn" data-value="&equals;">&equals;</button>
                <span class="middle"></span>
                <button type="button" class="tick-mark-btn" data-value="✔">✔</button>
              </li>
              <li class="dropdown-item">
                <button type="button" class="tick-mark-btn" data-value="NM">NM</button>
                <span class="middle"></span>
                <button type="button" class="tick-mark-btn" data-value="P">P</button>
              </li>
              <li class="dropdown-item">
                <button type="button" class="tick-mark-btn" data-value="C">C</button>
                <span class="middle"></span>
                <button type="button" class="tick-mark-btn" data-value="OCC">OCC</button>
              </li>
              <li class="dropdown-item">
                <button type="button" class="tick-mark-btn" data-value="CU">CU</button>
                <span class="middle"></span>
                <button type="button" class="tick-mark-btn" data-value="CL">CL</button>
              </li>
              <li class="dropdown-item">
                <button type="button" class="tick-mark-btn" data-value="PD">PD</button>
                <span class="middle"></span>
                <button type="button" class="tick-mark-btn" data-value="RT">RT</button>
              </li>
            </ul>
            <button type="button" class="submit">submit</button>
          </div>
        </div>
        <div id="commentModal" class="comment-modal">
          <div class="comment-box">
            <div id="unconditionalCommentTextarea" class="comment-textarea">
              <textarea class="" placeholder="التعليق"></textarea>
              <div></div>
              <div class="error"></div>
            </div>
            <div class="condition">
              <select class="left-handside">
                <option value="[اسم الحساب]">account name</option>
                <option value="[رقم المرجع]">ref number</option>
                <option value="[التاريخ]">date</option>
                <option value="[الوصف]">description</option>
                <option value="[القيمة]">value</option>
              </select>
              <select class="condition-operator">
                <option value=">"> > </option>
                <option value="<"> < </option>
                <option value="="> = </option>
              </select>
              <select class="right-handside">
                <option value="[اسم الحساب]">account name</option>
                <option value="[رقم المرجع]">ref number</option>
                <option value="[التاريخ]">date</option>
                <option value="[الوصف]">description</option>
                <option value="[القيمة]">value</option>
              </select>
            </div>
            <div id="conditionalCommentTextarea" class="comment-textarea conditional">
              <textarea class="" placeholder="التعليق"></textarea>
              <div></div>
              <div class="error"></div>
            </div>
            <div>
              <button type="button" class="comment-btn">comment</button>
              <button type="button" class="condition-btn">FX</button>
            </div>
          </div>
          <button type="button" class="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
        </div>
      </div>
    `;

    window.onscroll= (e)=>{
      e.stopPropagation();
      if(window.scrollY >= 100){
        outer.classList.add("stuck");
      }
      else{
        outer.classList.remove("stuck");
      }
    };

    const tabs = document.querySelectorAll(".outer .container > div > button.btn-toggler");
    // dropdowns
    const WPDropdown = document.querySelector(".outer .container .WP .dropdown");
    const copybutton = WPDropdown.querySelector("ul li .btn-copy");
    const pastbutton = WPDropdown.querySelector("ul li .btn-past");
    // console.log(copybutton, pastbutton);

    // tick marks and its childrens selectors
    const tickMarksDropdown = document.querySelector(".outer .container .symbols .dropdown");
    const tickMarksButtons = tickMarksDropdown.querySelectorAll("ul li button");
    const tickMarksSubmitBtn = tickMarksDropdown.querySelector(".submit");

    // comment modal and its childrens selectors
    const commentModal = document.getElementById("commentModal");
    // const comment = document.getElementById("unconditionalCommentTextarea");
    const commentTextareaAll = document.querySelectorAll(".comment-textarea textarea");
    // const commentError = document.querySelector(".error");
    // const commentCondition = comment.qu
    const commentButton = document.querySelector(".comment-box .comment-btn");
    const conditionButton = document.querySelector(".comment-box .condition-btn");
    const commentModalCloseBtn = document.querySelector("#commentModal button.close-btn");

    // const conditionSelector = document.querySelector(".comment-box .condition");
    const leftHandsideSelector = document.querySelector(".comment-box .condition select.left-handside");
    const conditionOperatorSelector = document.querySelector(".comment-box .condition .condition-operator");
    const rightHandsideSelector = document.querySelector(".comment-box .condition select.right-handside");


    class Errors {
      values = {}
      addError({type, value}){
        this.values[type] = value;
      }
      
      removeError(errorType){
        const newErrors = {};
        for(const [type, value] of Object.entries(this.values)){
          if(type !== errorType){
            newErrors[type] = value;
          }
        }
        this.values = {...newErrors};
      }

      getErrors(){
        return this.values;
      }
    }

    const commentField = {
      type: null,
      unconditional: {
        value : "",
        errors : new Errors()
      },
      conditional: {
        value : "",
        condition: null,
        errors : new Errors()
      }
    }

    const conditionField = {
      leftHand: null,
      operator: null,
      rightHand: null,
      errors: new Errors()
    }

    
    const TickMarksConfg = {
      exTikMarks: ["MV", "O", "=", "✔", "NM", "P", "C", "OCC", "CU", "CL", "PD", "RT"],
    }

    function searchForTikMarks (){
      const firstTikMarksList = document.querySelectorAll(".sd_row:first-child td.tik .ls_chkpop section .ls_tiklist .row .symb");
      const firstTikMarksListValues = Array.from(firstTikMarksList).map(tikMark => tikMark.textContent);
      // console.log("firstTikMarksListVal", firstTikMarksListValues);

      const foundedTikMarks = TickMarksConfg.exTikMarks.filter((tikMark)=>{
        return firstTikMarksListValues.includes(tikMark);
      });
      // console.log("foundedTikMarks", foundedTikMarks);
      return foundedTikMarks;
    }
    const tableTikMarks= searchForTikMarks();

    const TickMarksField = {
      value : [],
      errors : new Errors()
    }

    const commentData = {
      accountName: {
        value: "",
        placeholder: "[اسم الحساب]"
      },
      refNumber: {
        value: "",
        placeholder: "[رقم المرجع]"
      },
      date: {
        value: "",
        placeholder: "[التاريخ]"
      },
      desc: {
        value: "",
        placeholder: "[الوصف]"
      },
      value: {
        value: "",
        placeholder: "[القيمة]"
      }
    }

    tabs[0].onclick=(e)=>{
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      outer.classList.toggle("tab-move");
      
      if(outer.classList.contains("tab-move")){
      setTimeout(()=> outer.classList.add("overflow"), 700);
      }else{
        outer.classList.remove("overflow")
      }
      
      if(tabs[1].classList.contains("active")) tabs[1].click();
      if(tabs[2].classList.contains("active")) tabs[2].click();
      if(tabs[3].classList.contains("active")) tabs[3].click();
    };

    tabs[1].onclick= (e)=>{
      e.stopPropagation();
      e.stopImmediatePropagation();

      tabs[1].classList.toggle("active");

      if(!e.currentTarget.classList.contains("active")){
        copybutton.classList.remove("active");
        pastbutton.classList.remove("active");
      }

      WPDropdown.classList.toggle("dropdown-move");
      WPDropdown.classList.toggle("visibility");
    };

    tabs[2].onclick= (e)=>{
      e.stopPropagation();
      e.stopImmediatePropagation();

      tabs[2].classList.add("active");

      // if(!tabs[2].classList.contains("active"))
      // outer.classList.toggle("overflow");
      
      if(tabs[1].classList.contains("active")) tabs[1].click();
      if(tabs[3].classList.contains("active")) tabs[3].click();

      commentModal.classList.add("show");
    };

    let userInputs = "";
    let prevContent = undefined;
    document.querySelector("#unconditionalCommentTextarea textarea")
    .addEventListener("input", (e)=>{
      // console.log("data", e.currentTarget.value);
      const unconditionalCommentError = document.querySelector("#unconditionalCommentTextarea .error");
      // userInputs += e.data;
      
      if( e.data === "@" ){
        const pos = foundChanges(prevContent, e.currentTarget.value);
        // console.log("prevContent", prevContent, " value when @ inputed", e.currentTarget.value, "pos", pos.start);
        commentField.unconditional.value = handlePopup(e.currentTarget, pos.start);
        // console.log("afterhandlepopup", commentField.unconditional.value)
      }else{
        prevContent= e.currentTarget.value;
        // console.log("prevContent", prevContent);
        commentField.unconditional.value = prevContent;
        if(commentModal.querySelector(".popup")){
          removeDropdown(e.currentTarget, commentModal.querySelector(".popup"));
        }
      }
      commentField.unconditional.errors = handleCommentTextareaErrors(e);
      // console.log("foundedErrors", commentField.unconditional.errors);
      const foundedErrors = commentField.unconditional.errors.getErrors();

      if(!Object.keys(foundedErrors).length){
        unconditionalCommentError.classList.remove("show");
        commentButton.classList.remove("disable");
        commentField.unconditional.errors.removeError("required");
        // console.log("unconditionalCommentError", unconditionalCommentError)
      } 
      // else{
      //   unconditionalCommentError.innerHTML = foundedErrors.required;  
      // }
    });
  
    // condition field
    leftHandsideSelector.addEventListener("change", (e)=>{
      conditionField.leftHand = e.currentTarget.value;
      // console.log("lefthand", conditionField.leftHand);
    });
    
    conditionOperatorSelector.addEventListener("change", (e)=>{
      conditionField.operator = e.currentTarget.value;
      // console.log(conditionField.operator)
    });

    rightHandsideSelector.addEventListener("change", (e)=>{
      conditionField.rightHand = e.currentTarget.value;
      // console.log("rightHand", conditionField.rightHand);
    });


    // document.querySelector("#conditionalCommentTextarea textarea")
    // .addEventListener("input", (e)=>{
    //   const conditionalCommentError = document.querySelector("#conditionalCommentTextarea .error");
    //   commentField.conditional.value = handleCommentTextarea(e.currentTarget);
    //   commentField.conditional.errors = handleCommentTextareaErrors(e);
    //   const foundedErrors = commentField.conditional.errors.getErrors();

    //   if(!Object.keys(foundedErrors).length){
    //     conditionalCommentError.classList.remove("show");
    //     commentButton.classList.remove("disable");
    //     commentField.conditional.errors.removeError("required");
    //     console.log("conditionalCommentError", conditionalCommentError);
    //   } 
    //   // else{
    //   //   conditionalCommentError.innerHTML = foundedErrors.required;  
    //   // }
    // });
    
    function foundChanges(oldText, newText){
      // console.log("oldText", oldText, "newText", newText);
      const pos = {start: undefined, end: undefined};
      Array.from(newText).forEach((char, i)=>{
        // console.log("characters", char);
        if(char !== oldText[i] && pos.start === undefined){
          // console.log("newChar", char);
          pos.start= i;
        }
        else if(char !== oldText[i]){
          // console.log("endnewChar", char);
          pos.end= i;
        }
      })

      return pos;
    }

    function handlePopup(commentTextarea, pos){
      const content = commentTextarea.value;
      
      // commentTextarea.nextElementSibling.innerHTML= content;
      // commentTextarea.nextElementSibling.style.zIndex="0"; 
      
      if(content.at(pos) === "@" && content.at(pos - 1) === " "){
        // console.log("contentWith@", content);
        let rightPart = content.slice(0, pos);
        let leftPart = content.slice((pos + 1), content.length);
        // console.log("contentWithout@", rightPart, " + ", leftPart);
        // const em = document.createElement("em");
        // em.innerHTML = "@";
        // em.classList.add("traker");

        // commentTextarea.nextElementSibling.style.zIndex="2";
        // commentTextarea.nextElementSibling.innerHTML= `
        // ${rightPart}
        //   <div class="popup">
        //     <u class="list">
        //       <li class="list-item" data-value="${commentData.accountName.placeholder}">اسم الحساب</li>
        //       <li class="list-item" data-value="${commentData.refNumber.placeholder}">رقم المرجع</li>
        //       <li class="list-item" data-value="${commentData.date.placeholder}">التاريخ</li>
        //       <li class="list-item" data-value="${commentData.desc.placeholder}">الوصف</li>
        //       <li class="list-item" data-value="${commentData.value.placeholder}">القيمة</li>
        //     </u>
        //   </div>
        // ${leftPart}
        // `;
        // commentTextarea.nextElementSibling.innerHTML= rightPart;
        // commentTextarea.nextElementSibling.appendChild(em);
        // commentTextarea.nextElementSibling.innerHTML += leftPart;
        // console.log("traker", document.querySelector(".traker").getBoundingClientRect());
        
        const dropDown = document.createElement("div");
        dropDown.classList.add("popup");
        dropDown.innerHTML= `
          <u class="list">
            <li class="list-item" data-value="${commentData.accountName.placeholder}">اسم الحساب</li>
            <li class="list-item" data-value="${commentData.refNumber.placeholder}">رقم المرجع</li>
            <li class="list-item" data-value="${commentData.date.placeholder}">التاريخ</li>
            <li class="list-item" data-value="${commentData.desc.placeholder}">الوصف</li>
            <li class="list-item" data-value="${commentData.value.placeholder}">القيمة</li>
          </u>
        `;
        commentTextarea.parentElement.appendChild(dropDown);
        // const left = document.querySelector(".traker").getBoundingClientRect().left - dropDown.getBoundingClientRect().width;
        // dropDown.style.left = left + "px";
        // const top = document.querySelector(".traker").getBoundingClientRect().top;
        // dropDown.style.top = `calc( ${top}px + 1.1rem)`;
        dropDown.style.position = "absolute";
        dropDown.style.top = "100%";
        dropDown.style.right= "0%";

        // console.log(commentTextarea.nextElementSibling);
        // const listItems = commentTextarea.nextElementSibling.querySelectorAll(".popup .list .list-item")        
        const listItems = document.querySelectorAll(".popup .list .list-item");
        Array.from(listItems).forEach((listItem)=>{
          // console.log("listItems", listItems)
          listItem.addEventListener("click", (e)=>{
            e.stopPropagation();
            e.stopImmediatePropagation();
            // console.log("clickedlist");
            const value = getListItemvalue(listItem);
            // rightPart = rightPart.slice(0, (pos - 1));
            const newContent = rightPart + value + leftPart;
            // console.log("newContent", newContent);
            commentTextarea.value = newContent;
    
            // commentTextarea.nextElementSibling.style.zIndex="0";
            // commentTextarea.nextElementSibling.innerHTML = newContent;
            removeDropdown(commentTextarea, commentModal.querySelector(".popup"))
            commentTextarea.dispatchEvent(new Event("input"));
            commentTextarea.focus();
          });
        });
      }
      else{
        commentTextarea.nextElementSibling.style.zIndex="0";
      }

      commentTextarea.addEventListener("click", (e)=>{
        e.stopPropagation();
        e.stopImmediatePropagation();
        if(commentModal.querySelector(".popup")){
          removeDropdown(e.currentTarget, commentModal.querySelector(".popup"));
        }
      });

      return commentTextarea.value;
    }

    function removeDropdown(targetEle, dropdown){

        // console.log("e.currentTarget", targetEle, "e.target", e.target);
        dropdown.remove();
        // commentTextarea.nextElementSibling.style.zIndex="0";
        // if(targetEle)
        // targetEle.value = targetEle.value.slice(0, -1);
        // targetEle.focus();
    }
    // function handleCommentTextarea(commentTextarea, pos){
    //   const content = commentTextarea.value;
      
    //   commentTextarea.nextElementSibling.innerHTML= content;
    //   commentTextarea.nextElementSibling.style.zIndex="0"; 
      
    //   if(content.endsWith(" @")){
      
    //     // let newContent = content.substr(0, content.length - 1);
    //     commentTextarea.nextElementSibling.style.zIndex="2";
    //     commentTextarea.nextElementSibling.innerHTML= `
    //     ${content}
    //       <div class="popup">
    //         <u class="list">
    //           <li class="list-item" data-value="${commentData.accountName.placeholder}">اسم الحساب</li>
    //           <li class="list-item" data-value="${commentData.refNumber.placeholder}">رقم المرجع</li>
    //           <li class="list-item" data-value="${commentData.date.placeholder}">التاريخ</li>
    //           <li class="list-item" data-value="${commentData.desc.placeholder}">الوصف</li>
    //           <li class="list-item" data-value="${commentData.value.placeholder}">القيمة</li>
    //         </u>
    //       </div>
    //     `;
    
    //     const listItems = commentTextarea.nextElementSibling.querySelectorAll(".popup .list .list-item")        
    //     Array.from(listItems).forEach((listItem)=>{
    //       console.log("listItems", listItems)
    //       listItem.addEventListener("click", (e)=>{
    //         e.stopPropagation();
    //         e.stopImmediatePropagation();
            
    //         let newContent = content.substr(0, content.length - 1);
    //         const value = getListItemvalue(listItem);
    //         newContent += value;
    //         console.log("newContent", newContent);
    //         commentTextarea.value = newContent;
    
    //         commentTextarea.nextElementSibling.style.zIndex="0";
    //         commentTextarea.nextElementSibling.innerHTML = newContent;
    
    //         commentTextarea.dispatchEvent(new Event("input"));
    //         commentTextarea.focus();
    //       });
    //     });
    //   }
    //   else{
    //     commentTextarea.nextElementSibling.style.zIndex="0";
    //   }

    //   commentTextarea.nextElementSibling.addEventListener("click", (e)=>{
    //     e.stopPropagation();
    //     e.stopImmediatePropagation();

    //     if(e.currentTarget === e.target){
    //       console.log("e.currentTarget", e.currentTarget, "e.target", e.target);
    //       e.currentTarget.firstElementChild.remove();
    //       commentTextarea.nextElementSibling.style.zIndex="0";
    //       commentTextarea.value = commentTextarea.value.slice(0, -1);
    //       commentTextarea.focus();
    //     }
      
    //   });

    //   return commentTextarea.value;
    // }

    function handleCommentTextareaErrors(e){
      if( e.data !== null && 
          (e.currentTarget.value === "" || e.currentTarget.value === undefined)
        ){
        const errors = new Errors();
        errors.addError({type: "required", value: "you should enter comment"});
        return errors;
      }

      return new Errors();
    }
    
    commentButton.addEventListener("click", (e)=>{
      if(location.pathname.split("/")[2].toString() === "audit_sampling"){

        const unconditionalCommentTextarea = document.querySelector("#unconditionalCommentTextarea");
        const conditionalCommentTextarea = document.querySelector("#conditionalCommentTextarea");
        const commentError1 = document.querySelector("#unconditionalCommentTextarea .error");
        const commentError2 = document.querySelector("#conditionalCommentTextarea .error");

        if(commentField.unconditional.value === "" || commentField.unconditional.value === undefined){
          const newError = {type: "required" , value: "comment is required"};
          commentField.unconditional.errors.addError(newError);
          commentError1.innerHTML = commentField.unconditional.errors.getErrors().required;
          commentError1.classList.add("show");
          commentButton.classList.add("disable");
        }

        if( commentField.type === "unconditional" && 
          (commentField.conditional.value === "" || commentField.conditional.value === undefined)
        ){
          const newError = {type: "required" , value: "comment is required"};
          commentField.conditional.errors.addError(newError);
          commentError2.innerHTML = commentField.conditional.errors.getErrors().required;
          commentError2.classList.add("show");
          commentButton.classList.add("disable");
        }

        const allRow = document.querySelectorAll(".sd_row");
        if(allRow === null ){
          // console.error("wrong bage or table until not loaded");
        }else{
          const unconditionalCommentError = commentField.unconditional.errors.getErrors();
          const conditionalCommentError = commentField.conditional.errors.getErrors();

          // console.log("unconditionalCommentError", unconditionalCommentError, "conditionalCommentError", conditionalCommentError)
          if(!!!Object.keys(unconditionalCommentError).length && !!!Object.keys(conditionalCommentError).length){
          
            let rowIndex = 0;
          
            const setIntervalId = setInterval(()=>{
              clickTableArrow(allRow[rowIndex]);
              autoFillTableComments(allRow[rowIndex]);

              allRow[rowIndex].scrollIntoViewIfNeeded(false);
              // console.log("rowIndex", rowIndex, "allRow.length", allRow.length)
              if(rowIndex === (allRow.length - 1)){
                clearInterval(setIntervalId);
              }

              rowIndex++;
            },0);
          }else{
            console.log("there is errors")
          }
        }
      }
      else{
        e.currentTarget.classList.add("disable");
      }
    });
    commentButton.addEventListener("mousedown", animateOnMousedown);
    commentButton.addEventListener("mouseup", animateOnMouseup);

    conditionButton.addEventListener("click", (e)=>{
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.currentTarget.classList.toggle("active");

      if(e.currentTarget.classList.contains("active")){
        commentField.type = "conditional";
        document.querySelector("#conditionalCommentTextarea").classList.add("show");
        document.querySelector("#conditionalCommentTextarea textarea").style.height= "70px";
        document.querySelector("#conditionalCommentTextarea > div").style.height= "70px";
        document.querySelector("#unconditionalCommentTextarea textarea").style.height= "70px";
        document.querySelector("#unconditionalCommentTextarea > div").style.height= "70px";
        document.querySelector(".comment-box .condition").classList.add("show");
      }else{
        commentField.type = "unconditional";
        document.querySelector("#conditionalCommentTextarea").classList.remove("show");
        document.querySelector("#conditionalCommentTextarea textarea").style.height= "150px";
        document.querySelector("#conditionalCommentTextarea > div").style.height= "150px";
        document.querySelector("#unconditionalCommentTextarea textarea").style.height= "150px";
        document.querySelector("#unconditionalCommentTextarea > div").style.height= "150px";
        document.querySelector(".comment-box .condition").classList.remove("show");
      }
    })

    // handle comment modal close button
    commentModalCloseBtn.addEventListener("click", (e)=>{
      commentModal.classList.remove("show");
      tabs[2].classList.remove("active");
      commentTextareaAll.forEach((textarea)=>{
        textarea.value = "";
        textarea.dispatchEvent(new Event("input"));
      })
    })
      
    // tick-marks tag
    tabs[3].onclick= (e)=>{
      e.stopPropagation();
      e.stopImmediatePropagation();

      tabs[3].classList.toggle("active");

      document.querySelector(".symbols .dropdown").classList.toggle("visibility");
      document.querySelector(".symbols .dropdown").classList.toggle("dropdown-move"); 
      if(!tabs[3].classList.contains("active")){
        Array.from(tickMarksDropdown.querySelectorAll("ul li button.selected"))
        .forEach(tikMarkButton => tikMarkButton.click());
      }
    };

    // tick-marks buttons
    tickMarksButtons.forEach((button)=>{
      button.addEventListener("click", (e)=>{
        e.stopPropagation();
        e.stopImmediatePropagation();
        // console.log("clicked symbols")
        e.currentTarget.classList.toggle("selected");
        if(e.currentTarget.classList.contains("selected")){
          
          TickMarksField.value.push(e.currentTarget.dataset.value);
        }else{

          TickMarksField.value= TickMarksField.value.filter((value)=> e.currentTarget.dataset.value !== value);
        }

        // console.log("tik conente", TickMarksField.value)

        TickMarksField.errors.removeError("required");
        tickMarksSubmitBtn.classList.remove("disable");
      });
    });

    tickMarksSubmitBtn.addEventListener("click", (e)=>{
      
      const isFoundedErrors = Object.keys(TickMarksField.errors.getErrors()).length > 0;
    
      if(!isFoundedErrors && TickMarksField.value.length){
        
        if(location.pathname.split("/")[2].toString() === "audit_sampling"){
          
          let index = 0;
          const tableTikMarksLists = document.querySelectorAll(".ls_tiklist");
          const filteredTikMarks = tableTikMarks.filter(tikMark => TickMarksField.value.includes(tikMark));
          const clickDuration = 50;
          const AllTikMarkClickDur = tableTikMarks.length * 100;

          const setIntervalId = setInterval(()=>{

            handleTableTickMarks(filteredTikMarks, tableTikMarksLists[index], clickDuration);
            // to scroll to view
            tableTikMarksLists[index].parentElement.parentElement.parentElement.scrollIntoViewIfNeeded(false);
            if(index === (tableTikMarksLists.length - 1)){
              clearInterval(setIntervalId);
            }else{
              index++;
            }
          },AllTikMarkClickDur);
        } else{

          e.currentTarget.classList.add("disable");
        }
      }
      else{
        TickMarksField.errors.addError({type: "required", value: "must at least select one tik mark"});
        e.currentTarget.classList.add("disable");
      }
    });

    tickMarksSubmitBtn.addEventListener("mousedown", animateOnMousedown);
    tickMarksSubmitBtn.addEventListener("mouseup", animateOnMouseup);

    function animateOnMousedown(e){
      e.stopPropagation();
      // console.log("animate");
      e.currentTarget.style.transitionDuration= "transform 0.2s";
      e.currentTarget.style.transform = "scale(0.9)";
    }

    function animateOnMouseup(e){
      e.stopPropagation();
      // item.classList.remove("click-animation");
      e.currentTarget.style.transitionDuration= "transform 0.2s";
      e.currentTarget.style.transform = "scale(1)";
    }

    function getListItemvalue (listItem){
      // console.log(listItem.dataset.value);
      return listItem.dataset.value;
    }

    function clickTableArrow(row){
      const rowCells = row.children;
      let s= rowCells[6].children;
      let ss=s.item(0).children;
      let arrow=ss.item(1).children;
      arrow.item(0).click();
    }

    function autoFillTableComments(row){
      // let ifPOrNValue="";
      const rowCells = row.children;

      commentData.desc.value = rowCells[5].textContent.toString().trim();
      commentData.refNumber.value = rowCells[3].textContent.toString().trim();
      commentData.date.value = rowCells[4].textContent.toString().trim();
      commentData.value.value = rowCells[6].textContent.toString().trim();
      
      let accountName= document.querySelector(".highlight td:first-child a");

      if(accountName){
        commentData.accountName.value= accountName.textContent.toString().trim();
      } 

      let comment = null;
      if(commentField.type === "unconditional"){

        comment = commentField.unconditional.value;
      }else{
        // console.log("condition");
        switch(conditionField.operator){
          case null: {
            console.log(null);
            break;
          }
          case ">": {
            console.log(">");
            let leftHandside= undefined;
            let rightHandside = undefined;

            for(const [property, value] of Object.entries(commentData)){
              if(conditionField.leftHand === value.placeholder) leftHandside = value.value;
              if(conditionField.rightHand === value.placeholder) rightHandside = value.value;
            }

            if(leftHandside > rightHandside) {
              comment = commentField.conditional.value;
            }else{
              comment = commentField.unconditional.value;
            }
            console.log(">>", comment, leftHandside, rightHandside);
            break;
          }
          case "<": {
            console.log("<");
            let leftHandside= undefined;
            let rightHandside = undefined;

            for(const [property, value] of Object.entries(commentData)){
              if(conditionField.leftHand === value.placeholder) leftHandside = value.value;
              if(conditionField.rightHand === value.placeholder) rightHandside = value.value;
            }

            if(leftHandside < rightHandside) {
              comment = commentField.conditional.value;
            }else{
              comment = commentField.unconditional.value;
            }
            console.log("<<", comment, leftHandside, rightHandside);
            break;
          }
          case "=": {
            console.log("=");
            let leftHandside= undefined;
            let rightHandside = undefined;

            for(const [property, value] of Object.entries(commentData)){
              if(conditionField.leftHand === value.placeholder) leftHandside = value.value;
              if(conditionField.rightHand === value.placeholder) rightHandside = value.value;
            }

            if(leftHandside === rightHandside) {
              comment = commentField.conditional.value;
            }else{
              comment = commentField.unconditional.value;
            }
            console.log("==", comment, leftHandside, rightHandside);
            break;
          }
        }
      }

      comment = commentField.unconditional.value;
      const modifiedComment = modifyComment(commentData, comment);
      // console.log("modifiedComment", modifiedComment);
      

      if(
        commentData.desc.value.trim().includes("Prev Balance")||
        commentData.desc.value.trim().includes("Previous Balance")||
        commentData.desc.value.trim().includes("الرصيد السابق")||
        commentData.desc.value.trim().includes("رصيد افتتاحي")||
        commentData.desc.value.trim().includes("رصيد أول المدة")||
        commentData.desc.value.trim().includes("رصيد أول الفترة")||
        commentData.desc.value.trim().includes("قيد افتتاحي")||
        commentData.desc.value.trim().includes("رصيد اول المده")||
        commentData.desc.value.trim().includes("رصيد اول الفتره")||
        commentData.desc.value.trim().includes("الرصيد الافتتاحى")||
        commentData.desc.value.trim().includes("رصيد سابق")
      ){
        rowCells[10].children[2].value= `تم مطابقة الرصيد الافتتاحى`;
        rowCells[10].children[2].dispatchEvent(new Event("change"));
      } 
      else {
        rowCells[10].children[2].value= modifiedComment;
        rowCells[10].children[2].dispatchEvent(new Event("change"));
      }
    }

    //This function will modify the comment by replacing all placeholders 
    // with their corresponding values in the table.
    function modifyComment(commentData, comment){
      let tempComment = comment;
      for(const [filedName, filedValue] of Object.entries(commentData) ){
        // console.log("filedValue", filedValue);
        tempComment = replacePlaceholderWith(filedValue.placeholder, filedValue.value, tempComment)
      }

      const newComment = tempComment;
      return newComment;
    }

    function replacePlaceholderWith (placeholder, value, text){
      return text.replace(placeholder, value);
    }

    function handleTableTickMarks (selectedTickMarks, tikListEle, clickDuration){
      // console.log("tikListEle", tikListEle);
      try{
        const tableTikMarks = tikListEle.querySelectorAll(".row");

        selectedTickMarks.map((selectedTikMark)=>{
          let index= 0;
          let intervalId = setInterval(()=>{
            if(selectedTikMark === tableTikMarks[index].querySelector(".symb").textContent.trim()){
              // console.log("tikMark", tableTikMarks[index]);
              tableTikMarks[index].click();
            }

            if((tableTikMarks.length - 1) === index) clearInterval(intervalId);
            index++;
          }, clickDuration);
        })
      }
      catch(err){
        console.error(err);
      }
    }

    copybutton.addEventListener("click", (e)=>{
      e.stopPropagation();
      e.currentTarget.classList.add("active");
      if(e.currentTarget.classList.contains("active")){
        pastbutton.classList.remove("active");
      }
      if(location.pathname.split("/")[2].toString() === "working-paper-details"){

        let numOfPage= document.querySelector(".active a span").textContent.toString().trim();
        console.log("pageNumber", numOfPage);

        window.localStorage.rightCPage=numOfPage;
        const allTextarea= document.querySelectorAll(`div.special_input[wp-section="checklist"]`);
      
        const comments = {};

        // console.log("allTextareain copy", allTextarea);
        allTextarea.forEach((item,i)=>{   
          const dataContainer = document.createElement("div");
          dataContainer.innerHTML = item.innerHTML;
          const itemClasses = item.getAttribute("class");
          dataContainer.setAttribute("class", itemClasses);
          // console.log("dataContainerEle", dataContainer, "realitem", item);

          if(item.classList.contains("hasdata")){
            let dataValueWithoutDoc = item.dataset.value;
            let dataValueWithDoc = "";
            let foundedDoc = false;
            const allLinks = item.querySelectorAll("a");
            const splitorValues = item.dataset.value.match(/{{wp:.{1,}}}|{{doc:.{1,}}}/ig);
            
            const replcedValues = splitorValues? [...splitorValues]: [];
            const splitorValuesPos = item.dataset.value.search(/{{wp:.{1,}}}|{{doc:.{1,}}}/ig);
            const matchesValues = item.dataset.value.split(/{{wp:.{1,}}}|{{doc:.{1,}}}/ig);
            // console.log("matchesValues", matchesValues);
            const tempArrary= [];
            // datavalue before
            // console.log("c", i, " = ", item.dataset.value);
            
            let dataValue = undefined;
            Array.from(allLinks).forEach((a, j)=>{
              if(a.href.includes("view-supporting-doc")){
                foundedDoc= true;
                // console.log("view-supporting-doc", "dataValue i= ", j, splitorValues[j+1], " tageValue = ", a.textContent)
                replcedValues[j] = a.textContent;
              }
            });

            // console.log("/".repeat(20));
            Array.from(allLinks).forEach((a, j)=>{
              // console.log("splitor", splitorValues[j])
              // console.log("replacedValues", replcedValues[j])
              // console.log("staticValues", matchesValues.shift());
              const firstEle = matchesValues.shift();
              tempArrary.push(firstEle);
              tempArrary.push(replcedValues[j]);
            });
            // console.log("/".repeat(20));

            if(replcedValues.length){
              dataValue = tempArrary.join("");
              // console.log("dataValue", dataValue);
            }else{
              dataValue = item.dataset.value;
            }  

            comments[`c${i}`]= {
              value: item.innerHTML,
              dataValue: dataValue,
              cType: "has-link"
            }
          }else{
            console.log("its empty");
            comments[`c${i}`] = {
              value : null,
              dataValue: null,
              cType : "has-not-Link"
            }
          }
        });
        window.localStorage.setItem(`comments`, JSON.stringify(comments));
      }
    });

    copybutton.addEventListener("mousedown", animateOnMousedown);
    copybutton.addEventListener("mouseup", animateOnMouseup);

    pastbutton.addEventListener("click", (e)=>{
      e.stopPropagation();
      
      e.currentTarget.classList.add("active");
      if(e.currentTarget.classList.contains("active")){
        copybutton.classList.remove("active");
      }
      if(location.pathname.split("/")[2].toString() === "working-paper-details"){

        let numOfPage= document.querySelector(".active a span").textContent.toString().trim();
        window.localStorage.rightPPage= numOfPage;

        if(window.localStorage.rightCPage === window.localStorage.rightPPage){
          const allTextarea= document.querySelectorAll(`div.special_input[wp-section="checklist"]`);
          const comments = JSON.parse(window.localStorage.getItem("comments"));
          console.log("comments", comments);
          let isFull = false;
          console.log("allTextarea", allTextarea);
          Array.from(allTextarea).forEach((item, i)=>{        
            if(!item.classList.contains("hasdata")){
              if(comments[`c${i}`].cType === "has-link"){
                console.log("has-link", comments[`c${i}`].cType);
                // item.textContent = (comments[`c${i}`] || comments[`c${i}`].value !== null)? comments[`c${i}`].value : "";
                item.dataset.value = comments[`c${i}`].dataValue;
              }else{
                console.log("has-not-link", comments[`c${i}`].cType);
                // item.innerText = (comments[`c${i}`] || comments[`c${i}`].value !== null)? comments[`c${i}`].value : "";      
                item.dataset.value = comments[`c${i}`].dataValue;
              }
              item.classList.add("hasdata");
              console.log(comments[`c${i}`]);
              item.click();
              item.click();
              isFull= false;
              // window.localStorage.removeItem(`c${i}`);
            }else{
              isFull= true;
              console.log("its full");
            }        
          });
          if(!isFull){
            window.localStorage.removeItem(`comments`);
          }
        }
      }
    });

    pastbutton.addEventListener("mousedown", animateOnMousedown);
    pastbutton.addEventListener("mouseup", animateOnMouseup);
  }
// };
// }
 