/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Spark AR Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');
const Animation = require('Animation');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'
// Load in the Patches module



(async function () {  // Enables async/await in JS [part 1]
    
     start();

    Patches.outputs.getBoolean('QuestionAnswer').then(event => {
     event.monitor().subscribe(function (values) {
            Diagnostics.log(values.newValue);
            //Diagnostics.log(number);
            start();
          
        });
    });

    function start(){
        const number = getRandomInt(10);
        
        Patches.inputs.setScalar('Id', number);

        Diagnostics.log(number);

        if (number == 0)
        {
             Patches.inputs.setString('Questions', 'Hangisi Oğlak Dönencesi \nüzerinde toprağı bulunan \nülkelerden biri değildir?');
             Patches.inputs.setString('Answer', 'Hindistan');
             Patches.inputs.setString('Answer2', 'Mozambik');

            //Cevap Hindistan
        }
        else if (number == 1)
        {
             Patches.inputs.setString('Questions', 'Gırnata Emirliği nden kalma \ntarihi yapıları yerinde inceleyen \nbiri hangi yarımadadadır?');
             Patches.inputs.setString('Answer', 'Balkan Yarımadası');
             Patches.inputs.setString('Answer2', 'İber Yarımadası');

            //Cevap İber Yarımadası
        }
        else if (number == 2)
        {
             Patches.inputs.setString('Questions', 'Balkaş Gölü nden yola çıkıp \nAltay Dağları üzerinden Baykal Gölü ne \nulaşıyorsanız hangi kıtadasınızdır?');
             Patches.inputs.setString('Answer', 'Afrika');
             Patches.inputs.setString('Answer2', 'Asya');

            //Cevap Asya
        }
        else if (number == 3)
        {
             Patches.inputs.setString('Questions', 'Cevabı "sam yeli" olan \nbir bulmaca sorusunda \nsorulan hangisi olur?');
             Patches.inputs.setString('Answer', 'Çölden esen sıcak rüzgar');
             Patches.inputs.setString('Answer2', 'Nehirden esen sıcak rüzgar');

            //Çölden esen sıcak rüzgar
        }
        else if (number == 4)
        {
             Patches.inputs.setString('Questions', 'Hangi yılda Everest Dağı \nnın zirvesine tırmanmayı \nbaşaran olmamıştır?');
             Patches.inputs.setString('Answer', '2005');
             Patches.inputs.setString('Answer2', '2015');

            //Cevap 2015
        }
        else if (number == 5)
        {
             Patches.inputs.setString('Questions', 'Hangisinin eski adı \n"amudufıkari"dir?');
             Patches.inputs.setString('Answer', 'Bel kemiği');
             Patches.inputs.setString('Answer2', 'Kaval kemiği');

            //Cevap Bel kemiği
        }
        else if (number == 6)
        {
             Patches.inputs.setString('Questions', 'Ana taşıyıcı kuleleri  arasındaki \nmesafe en uzun olan, \n"en uzun asma köprü" hangisidir?');
             Patches.inputs.setString('Answer', 'Japonya daki Akaşi Kaikyo Köprüsü');
             Patches.inputs.setString('Answer2', 'Türkiye deki 1915 Çanakkale Köprüsü');

            //Cevap Türkiye'deki 1915 Çanakkale Köprüsü
        }
        else if (number == 7)
        {
             Patches.inputs.setString('Questions', '2021 TÜİK istatistiklerine göre,\nbu illerden hangisinin toplam \nihracatı daha fazladır?');
             Patches.inputs.setString('Answer', 'Adana');
             Patches.inputs.setString('Answer2', 'Çorum');

            //Cevap Çorum
        }
        else if (number == 8)
        {
             Patches.inputs.setString('Questions', 'Türkçe derslerinde "asıl", "sıra", "üleştirme", "kesir" \nön adlarıyla anlatılan sıfatlar hangileridir?');
             Patches.inputs.setString('Answer', 'İşaret sıfatları');
             Patches.inputs.setString('Answer2', 'Sayı sıfatları');

            //Cevap Sayı sıfatları
        }
        else if (number == 9)
        {
             Patches.inputs.setString('Questions', 'Hangi ünlü çöl Asya \nkıtasında değil, Amerika kıtasındadır?');
             Patches.inputs.setString('Answer', 'Atakama');
             Patches.inputs.setString('Answer2', 'Kızılkum');

            //Cevap Hindistan
        }
        else if (number == 10)
        {
             Patches.inputs.setString('Questions', 'Hangisi Ay ın yörüngesinde \ntur atmış ve canlı olarak \nDünya ya dönmüş ilk canlılardandır?');
             Patches.inputs.setString('Answer', 'Köpek');
             Patches.inputs.setString('Answer2', 'Kaplumbağa');

            //Cevap Kaplumbağa
        }
    }

    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }


 
  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]
