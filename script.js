const hexInput = document.querySelector(".hexInput");
const hexButton = document.querySelector(".hexButton");
const homeContainer = document.querySelector(".homeContainer");
const inputContainer = document.querySelector(".inputContainer");
const inputInfoContainer = document.querySelector(".inputInfoContainer");
const colorQuestion = document.querySelector(".colorQuestion");
const questionContainer = document.querySelector(".questionContainer");
const hashtag = document.querySelector(".hashtag");
const noteContainer = document.querySelector(".noteContainer");
const moodBoardContainer = document.querySelector(".moodBoardContainer");
const brandyWords = document.querySelector(".brandyWords");
const catHead = document.querySelector(".catHead");
const alphabetAndNumbers =
  "a b c d e f g h i j k l m n o p q r s t u v w x y z\n\n0 1 2 3 4 5 6 7 8 9";
let colorArray = [];
let imageArray = [];

const fetchColors = async () => {
  const url = `https://tailwind.simeongriggs.dev/api/brand/${hexInput.value}`;
  const color = await fetch(url);
  const colorJson = await color.json();
  const colorPalette = Object.values(colorJson.brand);
  colorArray.push(
    colorPalette[1],
    colorPalette[3],
    colorPalette[5],
    colorPalette[7],
    colorPalette[9]
  );
};

const getColorPalette = async () => {
  await fetchColors();
};

const doSteps = async () => {
  await getColorPalette();
  hexInput.remove();
  hexButton.remove();
  colorQuestion.remove();
  brandyWords.innerText = "Great Color!";
  const mainColor = colorArray[2];
  const colorChosenElement = document.createElement("div");
  colorChosenElement.className = "colorChosenElement noteElement";
  const colorChosenDisplay = document.createElement("div");
  colorChosenDisplay.style.backgroundColor = `${mainColor}`;
  colorChosenDisplay.className = "colorChosenDisplay";
  const colorChosenText = document.createElement("p");
  colorChosenText.innerText = `Main color : ${mainColor}`;
  colorChosenText.className = "colorChosenText";
  colorChosenElement.append(colorChosenDisplay, colorChosenText);
  const productQuestion = document.createElement("p");
  productQuestion.className = "productQuestion question";
  productQuestion.innerText = "What product will you offer?";
  const questionInputButton = document.createElement("div");
  questionInputButton.className = "inputContainer";
  const productInput = document.createElement("input");
  productInput.className = "productInput inputField";
  const productButton = document.createElement("button");
  productButton.innerText = "add to notes";
  productButton.className = "productButton button";
  hashtag.remove();
  questionInputButton.append(productInput, productButton);
  noteContainer.append(colorChosenElement);
  questionContainer.append(productQuestion, questionInputButton);
  const unsplashApiKey = " ";
  const getImages = async () => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${productInput.value}&client_id=${unsplashApiKey}`;
    const images = await fetch(url);
    const imagesJson = await images.json();
    imageArray.push(
      imagesJson.results[0]["urls"]["small"],
      imagesJson.results[1]["urls"]["small"],
      imagesJson.results[2]["urls"]["small"],
      imagesJson.results[3]["urls"]["small"]
    );
    productQuestion.remove();
    productInput.remove();
    productButton.remove();
    brandyWords.innerText = "Love that!";
    const productText = document.createElement("p");
    productText.className = "productText text";
    productText.innerText = `Product : ${productInput.value}`;
    noteContainer.append(productText);
    const brandNameQuestion = document.createElement("p");
    brandNameQuestion.className = "brandNameQuestion question";
    brandNameQuestion.innerText = "What will your brand name be?";
    const brandNameInput = document.createElement("input");
    const brandInputButton = document.createElement("div");
    brandInputButton.className = "inputContainer";
    brandNameInput.className = "brandNameInput inputField";
    const brandNameButton = document.createElement("button");
    brandNameButton.innerText = "add to notes";
    brandNameButton.className = "brandNameButton button";
    brandInputButton.append(brandNameInput, brandNameButton);
    questionContainer.append(brandNameQuestion, brandInputButton);
    const displayBrandNameAndFonts = () => {
      brandNameQuestion.remove();
      brandNameInput.remove();
      brandNameButton.remove();
      brandyWords.innerText = "Awesome Brand Name!";
      const brandNameElement = document.createElement("p");
      const brandName = `${brandNameInput.value}`;
      brandName.className = "brandName";
      brandNameElement.innerText = `Brand name : ${brandName}`;
      brandNameElement.className = "brandNameElement";
      noteContainer.append(brandNameElement);
      const fontQuestion = document.createElement("p");
      fontQuestion.className = "fontQuestion question";
      fontQuestion.innerText =
        "Choose which font combo you would like for your brand!";
      const fontComboContainer = document.createElement("div");
      fontComboContainer.className = "fontComboContainer";
      const fontComboElement1 = document.createElement("div");
      fontComboElement1.className = "fontComboElement1 fontComboElement";
      const font1Combo1 = document.createElement("p");
      font1Combo1.className = "font1Combo1 headerFont";
      font1Combo1.innerText = "Poppins Bold";
      const font2Combo1 = document.createElement("p");
      font2Combo1.className = "font2Combo1 paragraphFont";
      font2Combo1.innerText = "PT Sans Narrow";
      const fontCombo1Button = document.createElement("button");
      fontCombo1Button.className = "fontCombo1Button fontComboButton";
      fontCombo1Button.innerText = "Font Combo 1";
      fontComboElement1.append(font1Combo1, font2Combo1, fontCombo1Button);
      const fontComboElement2 = document.createElement("div");
      fontComboElement2.className = "fontComboElement2 fontComboElement";
      const font1Combo2 = document.createElement("p");
      font1Combo2.className = "font1Combo2 headerFont";
      font1Combo2.innerText = "EB Garamond Bold";
      const font2Combo2 = document.createElement("p");
      font2Combo2.className = "font2Combo2 paragraphFont";
      font2Combo2.innerText = "Poiret One";
      const fontCombo2Button = document.createElement("button");
      fontCombo2Button.className = "fontCombo2Button fontComboButton";
      fontCombo2Button.innerText = "Font Combo 2";
      fontComboElement2.append(font1Combo2, font2Combo2, fontCombo2Button);
      const fontComboElement3 = document.createElement("div");
      fontComboElement3.className = "fontComboElement3 fontComboElement";
      const font1Combo3 = document.createElement("p");
      font1Combo3.className = "font1Combo3 headerFont";
      font1Combo3.innerText = "Great Vibes";
      const font2Combo3 = document.createElement("p");
      font2Combo3.className = "font2Combo3 paragraphFont";
      font2Combo3.innerText = "Montserrat";
      const fontCombo3Button = document.createElement("button");
      fontCombo3Button.className = "fontCombo3Button fontComboButton";
      fontCombo3Button.innerText = "Font Combo 3";
      fontComboElement3.append(font1Combo3, font2Combo3, fontCombo3Button);
      fontComboContainer.append(
        fontComboElement1,
        fontComboElement2,
        fontComboElement3
      );
      questionContainer.append(fontQuestion, fontComboContainer);
      const removeFontElements = () => {
        fontQuestion.remove(), fontComboElement1.remove();
        fontComboElement2.remove();
        fontComboElement3.remove();
      };
      const addBrandNameTitle = () => {
        const brandNameTitle = document.createElement("p");
        brandNameTitle.className = "brandNameTitle title";
        brandNameTitle.innerText = "BRAND NAME";
        moodBoardContainer.append(brandNameTitle);
      };
      const addColorPaletteTitle = () => {
        const colorPaletteTitle = document.createElement("p");
        colorPaletteTitle.className = "colorPaletteTitle title";
        colorPaletteTitle.innerText = "COLOR PALETTE";
        moodBoardContainer.append(colorPaletteTitle);
      };
      const addImagesTitle = () => {
        const imagesTitle = document.createElement("p");
        imagesTitle.className = "imagesTitle title";
        imagesTitle.innerText = "INSPIRATION";
        moodBoardContainer.append(imagesTitle);
      };
      const addFontTitles = () => {
        const fontTitlesContainer = document.createElement("div");
        fontTitlesContainer.className = "fontTitlesContainer";
        const headerTitle = document.createElement("p");
        headerTitle.className = "headerTitle title";
        headerTitle.innerText = "HEADLINES";
        const bodyTitle = document.createElement("p");
        bodyTitle.className = "bodyTitle title";
        bodyTitle.innerText = "BODY COPY";
        fontTitlesContainer.append(headerTitle, bodyTitle);
        moodBoardContainer.append(fontTitlesContainer);
      };
      const addElementsTitles = () => {
        const elementsTitlesContainer = document.createElement("div");
        elementsTitlesContainer.className = "elementsTitlesContainer";
        const buttonsTitle = document.createElement("p");
        buttonsTitle.className = "buttonsTitle title";
        buttonsTitle.innerText = "ELEMENTS";
        const socialsTitle = document.createElement("p");
        socialsTitle.className = "bodyTitle title";
        socialsTitle.innerText = "SOCIAL MEDIA";
        elementsTitlesContainer.append(buttonsTitle, socialsTitle);
        moodBoardContainer.append(elementsTitlesContainer);
      };
      const addColorPalette = () => {
        const moodBoardColorPalette = document.createElement("div");
        moodBoardColorPalette.className = "moodBoardColorPalette";
        counter = 0;
        for (hexColor of colorArray) {
          const colorElement = document.createElement("div");
          colorElement.className = `colorElement${counter} colorElement`;
          colorElement.style.backgroundColor = `${colorArray[counter]}`;
          moodBoardColorPalette.append(colorElement);
          counter++;
        }
        moodBoardContainer.append(moodBoardColorPalette);
      };
      const addImages = () => {
        counter1 = 0;
        const moodBoardImages = document.createElement("div");
        moodBoardImages.className = "moodBoardImages";
        for (imageUrl of imageArray) {
          const imageElement = document.createElement("img");
          imageElement.className = `imageElement${counter1} imageElement`;
          imageElement.src = `${imageArray[counter1]}`;
          moodBoardImages.append(imageElement);
          counter1++;
        }
        moodBoardContainer.append(moodBoardImages);
      };
      const changeBrandyWords = () => {
        brandyWords.innerText = "Excellent choice!\nLet's see your brand kit!";
      };
      const changeBrandyWords1 = () => {
        brandyWords.innerText = "It came out amazing!";
        catHead.src = "images/cathead-wink.png";
      };
      const generateMoodBoardFont1 = () => {
        removeFontElements();
        changeBrandyWords();
        const printFontCombo1Element = document.createElement("div");
        printFontCombo1Element.className =
          "printFontCombo1Element printFontComboElement";
        const printFontCombo1 = document.createElement("p");
        printFontCombo1.className = "printFontCombo1";
        printFontCombo1.innerText = "Font Combination :";
        const printFont1Combo1 = document.createElement("p");
        printFont1Combo1.className = "printFont1Combo1 fontElement";
        printFont1Combo1.innerText = "Poppins Bold";
        const plusSign = document.createElement("p");
        plusSign.className = "plusSign";
        plusSign.innerText = "+";
        const printFont2Combo1 = document.createElement("p");
        printFont2Combo1.className = "printFont2Combo1 fontElement";
        printFont2Combo1.innerText = "PT Sans Narrow";
        printFontCombo1Element.append(
          printFontCombo1,
          printFont1Combo1,
          plusSign,
          printFont2Combo1
        );
        const generateMoodBoardButton = document.createElement("button");
        generateMoodBoardButton.className = "generateMoodBoardButton";
        generateMoodBoardButton.innerText = "Generate Brand Kit";
        questionContainer.append(generateMoodBoardButton);
        noteContainer.append(printFontCombo1Element);
        const generateMoodBoard = () => {
          changeBrandyWords1();
          generateMoodBoardButton.remove();
          addBrandNameTitle();
          const moodBoardBrandName = document.createElement("p");
          moodBoardBrandName.className =
            "moodBoardBrandName1 moodBoardBrandName";
          moodBoardBrandName.style.color = `${colorArray[2]}`;
          moodBoardBrandName.innerText = `${brandName}`;
          moodBoardContainer.append(moodBoardBrandName);
          addColorPaletteTitle();
          addColorPalette();
          addFontTitles();
          const moodBoardFontElement = document.createElement("div");
          moodBoardFontElement.className = "moodBoardFontElement";
          const moodBoardHeaderElement = document.createElement("div");
          moodBoardHeaderElement.className = "moodBoardHeaderElement";
          const moodBoardBodyElement = document.createElement("div");
          moodBoardBodyElement.className = "moodBoardBodyElement";
          const moodBoardHeaderText = document.createElement("p");
          moodBoardHeaderText.innerText = "Poppins Bold";
          moodBoardHeaderText.className =
            "moodBoardHeaderText1 moodBoardHeaderText";
          const moodBoardHeaderExample = document.createElement("p");
          moodBoardHeaderExample.className =
            "moodBoardHeaderExample1 moodBoardHeaderExample";
          moodBoardHeaderExample.innerText = alphabetAndNumbers;
          moodBoardHeaderElement.append(
            moodBoardHeaderText,
            moodBoardHeaderExample
          );
          const moodBoardBodyText = document.createElement("p");
          moodBoardBodyText.innerText = "PT Sans Narrow";
          moodBoardBodyText.className = "moodBoardBodyText1 moodBoardBodyText";
          const moodBoardBodyExample = document.createElement("p");
          moodBoardBodyExample.className =
            "moodBoardBodyExample1 moodBoardBodyExample";
          moodBoardBodyExample.innerText = alphabetAndNumbers;
          moodBoardBodyElement.append(moodBoardBodyText, moodBoardBodyExample);
          moodBoardFontElement.append(
            moodBoardHeaderElement,
            moodBoardBodyElement
          );
          moodBoardContainer.append(moodBoardFontElement);
          addElementsTitles();
          const elementsContainer = document.createElement("div");
          elementsContainer.className = "elementsContainer";
          const buttonsContainer = document.createElement("div");
          buttonsContainer.className = "buttonsContainer";
          const socialsContainer = document.createElement("div");
          socialsContainer.className = "socialsContainer";
          const moodBoardButton1 = document.createElement("div");
          moodBoardButton1.className = "moodBoardButton1Font1 moodBoardButton";
          moodBoardButton1.innerText = "About";
          moodBoardButton1.style.backgroundColor = `${colorArray[1]}`;
          const moodBoardButton2 = document.createElement("div");
          moodBoardButton2.className = "moodBoardButton2Font1 moodBoardButton";
          moodBoardButton2.innerText = "Contact Us";
          moodBoardButton2.style.backgroundColor = `${colorArray[4]}`;
          const moodBoardButton3 = document.createElement("div");
          moodBoardButton3.className = "moodBoardButton3Font1 moodBoardButton";
          moodBoardButton3.innerText = "Blog";
          moodBoardButton3.style.backgroundColor = `${colorArray[2]}`;
          const moodBoardInsta = document.createElement("img");
          moodBoardInsta.className = "moodBoardInsta moodBoardSocial";
          moodBoardInsta.src = "images/instagram-icon.png";
          moodBoardInsta.style.backgroundColor = `${colorArray[3]}`;
          const moodBoardPinterest = document.createElement("img");
          moodBoardPinterest.className = "moodBoardPinterest moodBoardSocial";
          moodBoardPinterest.src = "images/pinterest-icon.png";
          moodBoardPinterest.style.backgroundColor = `${colorArray[3]}`;
          const moodBoardTwitter = document.createElement("img");
          moodBoardTwitter.className = "moodBoardTwitter moodBoardSocial";
          moodBoardTwitter.src = "images/twitter-icon.png";
          moodBoardTwitter.style.backgroundColor = `${colorArray[3]}`;
          socialsContainer.append(
            moodBoardInsta,
            moodBoardPinterest,
            moodBoardTwitter
          );
          buttonsContainer.append(
            moodBoardButton1,
            moodBoardButton2,
            moodBoardButton3
          );
          elementsContainer.append(buttonsContainer, socialsContainer);
          moodBoardContainer.append(elementsContainer);
          addImagesTitle();
          addImages();
        };
        generateMoodBoardButton.addEventListener("click", () => {
          generateMoodBoard();
          questionContainer.remove();
        });
      };
      const generateMoodBoardFont2 = () => {
        removeFontElements();
        changeBrandyWords();
        const printFontCombo2Element = document.createElement("div");
        printFontCombo2Element.className =
          "printFontCombo2Element printFontComboElement";
        const printFontCombo2 = document.createElement("p");
        printFontCombo2.className = "printFontCombo2 printFontCombo";
        printFontCombo2.innerText = "Font Combination :";
        const printFont1Combo2 = document.createElement("p");
        printFont1Combo2.className = "printFont1Combo2 fontElement";
        printFont1Combo2.innerText = "EB Garamond";
        const plusSign = document.createElement("p");
        plusSign.className = "plusSign";
        plusSign.innerText = "+";
        const printFont2Combo2 = document.createElement("p");
        printFont2Combo2.className = "printFont2Combo2 fontElement";
        printFont2Combo2.innerText = "Poiret One";
        printFontCombo2Element.append(
          printFontCombo2,
          printFont1Combo2,
          plusSign,
          printFont2Combo2
        );
        const generateMoodBoardButton = document.createElement("button");
        generateMoodBoardButton.className = "generateMoodBoardButton";
        generateMoodBoardButton.innerText = "Generate Brand Kit";
        noteContainer.append(printFontCombo2Element);
        questionContainer.append(generateMoodBoardButton);
        const generateMoodBoard = () => {
          changeBrandyWords1();
          generateMoodBoardButton.remove();
          addBrandNameTitle();
          const moodBoardBrandName = document.createElement("p");
          moodBoardBrandName.className =
            "moodBoardBrandName2 moodBoardBrandName";
          moodBoardBrandName.innerText = `${brandName}`;
          moodBoardBrandName.style.color = `${colorArray[2]}`;
          moodBoardContainer.append(moodBoardBrandName);
          addColorPaletteTitle();
          addColorPalette();
          addFontTitles();
          const moodBoardFontElement = document.createElement("div");
          moodBoardFontElement.className = "moodBoardFontElement";
          const moodBoardHeaderElement = document.createElement("div");
          moodBoardHeaderElement.className = "moodBoardHeaderElement";
          const moodBoardBodyElement = document.createElement("div");
          moodBoardBodyElement.className = "moodBoardBodyElement";
          const moodBoardHeaderText = document.createElement("p");
          moodBoardHeaderText.innerText = "EB Garamond Bold";
          moodBoardHeaderText.className =
            "moodBoardHeaderText2 moodBoardHeaderText";
          const moodBoardHeaderExample = document.createElement("p");
          moodBoardHeaderExample.className =
            "moodBoardHeaderExample2 moodBoardHeaderExample";
          moodBoardHeaderExample.innerText = alphabetAndNumbers;
          moodBoardHeaderElement.append(
            moodBoardHeaderText,
            moodBoardHeaderExample
          );
          const moodBoardBodyText = document.createElement("p");
          moodBoardBodyText.innerText = "Poiret One";
          moodBoardBodyText.className = "moodBoardBodyText2 moodBoardBodyText";
          const moodBoardBodyExample = document.createElement("p");
          moodBoardBodyExample.className =
            "moodBoardBodyExample2 moodBoardBodyExample";
          moodBoardBodyExample.innerText = alphabetAndNumbers;
          moodBoardBodyElement.append(moodBoardBodyText, moodBoardBodyExample);
          moodBoardFontElement.append(
            moodBoardHeaderElement,
            moodBoardBodyElement
          );
          moodBoardFontElement.append(
            moodBoardHeaderElement,
            moodBoardBodyElement
          );
          moodBoardContainer.append(moodBoardFontElement);
          addElementsTitles();
          const elementsContainer = document.createElement("div");
          elementsContainer.className = "elementsContainer";
          const buttonsContainer = document.createElement("div");
          buttonsContainer.className = "buttonsContainer";
          const socialsContainer = document.createElement("div");
          socialsContainer.className = "socialsContainer";
          const moodBoardButton1 = document.createElement("div");
          moodBoardButton1.className = "moodBoardButton1Font2 moodBoardButton";
          moodBoardButton1.innerText = "About";
          moodBoardButton1.style.backgroundColor = `${colorArray[1]}`;
          const moodBoardButton2 = document.createElement("div");
          moodBoardButton2.className = "moodBoardButton2Font2 moodBoardButton";
          moodBoardButton2.innerText = "Contact Us";
          moodBoardButton2.style.backgroundColor = `${colorArray[4]}`;
          const moodBoardButton3 = document.createElement("div");
          moodBoardButton3.className = "moodBoardButton3Font2 moodBoardButton";
          moodBoardButton3.innerText = "Blog";
          moodBoardButton3.style.backgroundColor = `${colorArray[2]}`;
          const moodBoardInsta = document.createElement("img");
          moodBoardInsta.className = "moodBoardInsta moodBoardSocial";
          moodBoardInsta.src = "images/instagram-icon.png";
          moodBoardInsta.style.backgroundColor = `${colorArray[3]}`;
          const moodBoardPinterest = document.createElement("img");
          moodBoardPinterest.className = "moodBoardPinterest moodBoardSocial";
          moodBoardPinterest.src = "images/pinterest-icon.png";
          moodBoardPinterest.style.backgroundColor = `${colorArray[3]}`;
          const moodBoardTwitter = document.createElement("img");
          moodBoardTwitter.className = "moodBoardTwitter moodBoardSocial";
          moodBoardTwitter.src = "images/twitter-icon.png";
          moodBoardTwitter.style.backgroundColor = `${colorArray[3]}`;
          socialsContainer.append(
            moodBoardInsta,
            moodBoardPinterest,
            moodBoardTwitter
          );
          buttonsContainer.append(
            moodBoardButton1,
            moodBoardButton2,
            moodBoardButton3
          );
          elementsContainer.append(buttonsContainer, socialsContainer);
          moodBoardContainer.append(elementsContainer);
          addImagesTitle();
          addImages();
        };
        generateMoodBoardButton.addEventListener("click", () => {
          generateMoodBoard();
          questionContainer.remove();
        });
      };
      const generateMoodBoardFont3 = () => {
        removeFontElements();
        changeBrandyWords();
        const printFontCombo3Element = document.createElement("div");
        printFontCombo3Element.className =
          "printFontCombo3Element printFontComboElement";
        const printFontCombo3 = document.createElement("p");
        printFontCombo3.className = "printFontCombo3 printFontCombo";
        printFontCombo3.innerText = "Font Combination :";
        const printFont1Combo3 = document.createElement("p");
        printFont1Combo3.className = "printFont1Combo3 fontElement";
        printFont1Combo3.innerText = "Great Vibes";
        const plusSign = document.createElement("p");
        plusSign.className = "plusSign";
        plusSign.innerText = "+";
        const printFont2Combo3 = document.createElement("p");
        printFont2Combo3.className = "printFont2Combo3 fontElement";
        printFont2Combo3.innerText = "Monteserrat";
        printFontCombo3Element.append(
          printFontCombo3,
          printFont1Combo3,
          plusSign,
          printFont2Combo3
        );
        const generateMoodBoardButton = document.createElement("button");
        generateMoodBoardButton.className = "generateMoodBoardButton";
        generateMoodBoardButton.innerText = "Generate Brand Kit";
        noteContainer.append(printFontCombo3Element);
        questionContainer.append(generateMoodBoardButton);
        const generateMoodBoard = () => {
          changeBrandyWords1();
          generateMoodBoardButton.remove();
          addBrandNameTitle();
          const moodBoardBrandName3 = document.createElement("p");
          moodBoardBrandName3.className =
            "moodBoardBrandName3 moodBoardBrandName";
          moodBoardBrandName3.innerText = `${brandName}`;
          moodBoardBrandName3.style.color = `${colorArray[2]}`;
          moodBoardContainer.append(moodBoardBrandName3);
          addColorPaletteTitle();
          addColorPalette();
          addFontTitles();
          const moodBoardFontElement = document.createElement("div");
          moodBoardFontElement.className = "moodBoardFontElement";
          const moodBoardHeaderElement = document.createElement("div");
          moodBoardHeaderElement.className = "moodBoardHeaderElement";
          const moodBoardBodyElement = document.createElement("div");
          moodBoardBodyElement.className = "moodBoardBodyElement";
          const moodBoardHeaderText = document.createElement("p");
          moodBoardHeaderText.innerText = "Great Vibes";
          moodBoardHeaderText.className =
            "moodBoardHeaderText3 moodBoardHeaderText";
          const moodBoardHeaderExample = document.createElement("p");
          moodBoardHeaderExample.className =
            "moodBoardHeaderExample3 moodBoardHeaderExample";
          moodBoardHeaderExample.innerText = alphabetAndNumbers;
          moodBoardHeaderElement.append(
            moodBoardHeaderText,
            moodBoardHeaderExample
          );
          const moodBoardBodyText = document.createElement("p");
          moodBoardBodyText.innerText = "Montserrat";
          moodBoardBodyText.className = "moodBoardBodyText3 moodBoardBodyText";
          const moodBoardBodyExample = document.createElement("p");
          moodBoardBodyExample.className =
            "moodBoardBodyExample3 moodBoardBodyExample";
          moodBoardBodyExample.innerText = alphabetAndNumbers;
          moodBoardBodyElement.append(moodBoardBodyText, moodBoardBodyExample);
          moodBoardFontElement.append(
            moodBoardHeaderElement,
            moodBoardBodyElement
          );
          moodBoardFontElement.append(
            moodBoardHeaderElement,
            moodBoardBodyElement
          );
          moodBoardContainer.append(moodBoardFontElement);
          addElementsTitles();
          const elementsContainer = document.createElement("div");
          elementsContainer.className = "elementsContainer";
          const buttonsContainer = document.createElement("div");
          buttonsContainer.className = "buttonsContainer";
          const socialsContainer = document.createElement("div");
          socialsContainer.className = "socialsContainer";
          const moodBoardButton1 = document.createElement("div");
          moodBoardButton1.className = "moodBoardButton1Font3 moodBoardButton";
          moodBoardButton1.innerText = "About";
          moodBoardButton1.style.backgroundColor = `${colorArray[1]}`;
          const moodBoardButton2 = document.createElement("div");
          moodBoardButton2.className = "moodBoardButton2Font3 moodBoardButton";
          moodBoardButton2.innerText = "Contact Us";
          moodBoardButton2.style.backgroundColor = `${colorArray[4]}`;
          const moodBoardButton3 = document.createElement("div");
          moodBoardButton3.className = "moodBoardButton3Font3 moodBoardButton";
          moodBoardButton3.innerText = "Blog";
          moodBoardButton3.style.backgroundColor = `${colorArray[2]}`;
          const moodBoardInsta = document.createElement("img");
          moodBoardInsta.className = "moodBoardInsta moodBoardSocial";
          moodBoardInsta.src = "images/instagram-icon.png";
          moodBoardInsta.style.backgroundColor = `${colorArray[3]}`;
          const moodBoardPinterest = document.createElement("img");
          moodBoardPinterest.className = "moodBoardPinterest moodBoardSocial";
          moodBoardPinterest.src = "images/pinterest-icon.png";
          moodBoardPinterest.style.backgroundColor = `${colorArray[3]}`;
          const moodBoardTwitter = document.createElement("img");
          moodBoardTwitter.className = "moodBoardTwitter moodBoardSocial";
          moodBoardTwitter.src = "images/twitter-icon.png";
          moodBoardTwitter.style.backgroundColor = `${colorArray[3]}`;
          socialsContainer.append(
            moodBoardInsta,
            moodBoardPinterest,
            moodBoardTwitter
          );
          buttonsContainer.append(
            moodBoardButton1,
            moodBoardButton2,
            moodBoardButton3
          );
          elementsContainer.append(buttonsContainer, socialsContainer);
          moodBoardContainer.append(elementsContainer);
          addImagesTitle();
          addImages();
        };
        generateMoodBoardButton.addEventListener("click", () => {
          generateMoodBoard();
          questionContainer.remove();
        });
      };
      fontCombo1Button.addEventListener("click", () => {
        generateMoodBoardFont1();
      });
      fontCombo2Button.addEventListener("click", () => {
        generateMoodBoardFont2();
      });
      fontCombo3Button.addEventListener("click", () => {
        generateMoodBoardFont3();
      });
    };
    brandNameButton.addEventListener("click", () => {
      displayBrandNameAndFonts();
    });
  };
  productButton.addEventListener("click", () => {
    getImages();
  });
};

hexButton.addEventListener("click", () => {
  doSteps();
});
