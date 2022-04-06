import React,{useState} from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Progress from "../../components/progress";

const Page3 = ({ active, setActive, click1,click2,click3}) => {

  // convenience
    const [lightSwitch,setLightSwitch]=useState(1);
    const [dimmers,setDimmers]=useState(1);
    const [smartPlugs,setSmartPlugs]=useState(1);
    const [multiColorBulb,setMultiColorBulb]=useState(1);
    const [ambientStripLight,setAmbientStripLight]=useState(1);
    const [waterHeaterAutomation,setWaterHeaterAutomation]=useState(1);
    const [smartCurtainMotor,setSmartCurtainMotor]=useState(1);
    const [smartACThermostat,setSmartACThermostat]=useState(1);
    const [waterHeaterAutomation1,setWaterHeaterAutomation1]=useState(1);
    const [portableActionClicker,setPortableActionClicker]=useState(1);
    const [lightLevelMonitor,setLightLevelMonitor]=useState(1);
// safety
    const [smartDoorLock,setSmartDoorLock]=useState(1);
    const [indoorCamera,setIndoorCamera]=useState(1);
    const [outdoorCamera,setOutdoorCamera]=useState(1);
    const [motionAlarm,setMotionAlarm]=useState(1);
    const [doorStatusSensor,setDoorStatusSensor]=useState(1);
    const [sounderAlarm,setSounderAlarm]=useState(1);
    const [smokeDetector,setSmokeDetector]=useState(1);
    const [gasSensor,setGasSensor]=useState(1);
    const [waterFloodDetection,setWaterFloodDetection]=useState(1);
    const [enviromentalMonitoring,setEnviromentalMonitoring]=useState(1);
    const [co2LevelMonitoring,setCo2LevelMonitoring]=useState(1);
    const [panicPortableClicker,setPanicPortableClicker]=useState(1);
    // accessibility
    const [voiceControl,setVoiceControl]=useState(1);
    const [smartDoorBellWithCamera,setSmartDoorBellWithCamera]=useState(1);
    const [tvSystemController,setTvSystemController]=useState(1);
    const [electricalPlug,setElectricalPlug]=useState(1);
    const [fourControlTouchScreen,setFourControlTouchScreen]=useState(1);
    const [sixControlTouchScreen,setSixControlTouchScreen]=useState(1);

  return (
    <div className={`${active === 3 ? "" : "hidden"} `}>
      <Header color="black" />
      <div className="flex justify-center items-center middle:mt-24">
        <div className="container px-4 md:px-20 mx-auto my-10">
          {/* top */}
          <div className=" -mx-10 flex laptop:flex-row flex-col items-center gap-14 justify-between middle:mt-0 mt-24">
            <div>
              <h1
                className="laptop:text-6xl text-5xl desktop:text-7xl font-normal text-default leading-none tracking-wide capitalize"
                style={{ fontFamily: "Guthen Bloots Personal Use" }}
              >
                Build your own
              </h1>
              <p className="font-[aftika-bold] tracking-wide font-tiny uppercase">
                {click1?"Apartment":""}
                {click2?"Villa":""}
                {click3?"office":""}
              </p>
            </div>
            {click2?
            <>
{/* villa boxes start*/}
<div className="border border-gray-700 flex justify-between laptop:w-80 w-full gap-4 rounded-sm laptop:-mr-20">
              <div className="flex small:gap-4 gap-2">
                <div className="small:w-20 tablet:w-10 laptop:w-20 h-full bg-default rounded-sm"></div>
                <div className="flex flex-col justify-center  py-4  gap-2">
                  <p className="text-default text-xs capitalize font-[aftika-light]">
                    Energy Monitoring
                  </p>
                  <p className="text-default text-xs capitalize font-[aftika-light]">
                    Human Presence Sensing for appliances switching
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center gap-2 pr-6  py-4 ">
                {/* check */}

                <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    1
                  </span>
                </div>
                <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    1
                  </span>
                </div>
              </div>

              {/* check */}
            </div>

            <div className="border border-gray-700 flex justify-between  laptop:w-80 w-full gap-4 rounded-sm">
              <div className="flex small:gap-4 gap-2">
                <div className="small:w-20 tablet:w-10 laptop:w-20 h-full bg-default rounded-sm"></div>
                <div className="flex flex-col justify-center  py-4  gap-2">
                  <p className="text-default text-xs capitalize font-[aftika-light]">
                    Energy Monitoring
                  </p>
                  <p className="text-default text-xs capitalize font-[aftika-light]">
                    Human Presence Sensing for appliances switching
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center gap-2 pr-6  py-4 ">
                {/* check */}

                <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    1
                  </span>
                </div>
                <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    1
                  </span>
                </div>
              </div>

              {/* check */}
            </div>
{/* villa boxes end*/}
            </>:
            <>
            <div className="border border-gray-700 flex justify-between w-4/5 laptop:w-3/5 gap-4 rounded-sm">
              <div className="flex small:gap-4 gap-2">
                <div className="small:w-10 w-20 h-full bg-default rounded-sm"></div>
                <div className="flex flex-col justify-center  py-4  gap-2">
                  <p className="text-default text-xs capitalize font-[aftika-light]">
                    Energy Monitoring
                  </p>
                  <p className="text-default text-xs capitalize font-[aftika-light]">
                    Human Presence Sensing for appliances switching
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center gap-2 pr-6  py-4 ">
                {/* check */}

                <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    1
                  </span>
                </div>
                <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    1
                  </span>
                </div>
              </div>

              {/* check */}
            </div>
            </>
            }
          </div>

{/* Three boxes */}

    <div className="flex laptop:flex-row flex-col gap-10 tablet:-mr-10 justify-between my-6">
        <div className="flex-1 border border-gray-400 rounded-sm">
            <p className="h-8 bg-default uppercase text-white font-[aftika-extra-light] text-sm px-4 pt-1">Convenience</p>
            <div className="py-2 flex flex-col gap-2 px-4">
        {/* all row start */}
           <div className="flex justify-between items-center">
               <p className="text-xs text-default capitalize">Light Switch</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base `}
                        name="lightSwitch"
                        onClick={()=>setLightSwitch(lightSwitch+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base flex items-center justify-center`}
                        name="lightSwitch"
                        onClick={()=>{lightSwitch>0?setLightSwitch(lightSwitch-1):''}}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {lightSwitch}
                  </span>
                </div>
                </div>
                {/* one row */}
           <div className="flex justify-between items-center">
               <p className="text-xs text-default capitalize">Dimmers</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="dimmers"
                        onClick={()=>setDimmers(dimmers+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="dimmers"
                        onClick={()=>{dimmers>0?setDimmers(dimmers-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {dimmers}
                  </span>
                </div>
           </div>
           {/* one row end */}
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">Smart Plugs</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="smartPlugs"
                        onClick={()=>setSmartPlugs(smartPlugs+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="smartPlugs"
                        onClick={()=>{smartPlugs>0?setSmartPlugs(smartPlugs-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {smartPlugs}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">Multi Colour Bulb</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="multiColorBulb"
                        onClick={()=>setMultiColorBulb(multiColorBulb+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="multiColorBulb"
                        onClick={()=>{multiColorBulb>0?setMultiColorBulb(multiColorBulb-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {multiColorBulb}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">Ambient Strip Light</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="ambientStripLight"
                        onClick={()=>setAmbientStripLight(ambientStripLight+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="ambientStripLight"
                        onClick={()=>{ambientStripLight>0?setAmbientStripLight(ambientStripLight-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {ambientStripLight}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">water heater automation</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="waterHeaterAutomation"
                        onClick={()=>setWaterHeaterAutomation(waterHeaterAutomation+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="waterHeaterAutomation"
                        onClick={()=>{waterHeaterAutomation>0?setWaterHeaterAutomation(waterHeaterAutomation-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {waterHeaterAutomation}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">smart curtain motor</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="smartCurtainMotor"
                        onClick={()=>setSmartCurtainMotor(smartCurtainMotor+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="smartCurtainMotor"
                        onClick={()=>{smartCurtainMotor>0?setSmartCurtainMotor(smartCurtainMotor-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {smartCurtainMotor}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">smart AC thermostat</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="smartACThermostat"
                        onClick={()=>setSmartACThermostat(smartACThermostat+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="smartACThermostat"
                        onClick={()=>{smartACThermostat>0?setSmartACThermostat(smartACThermostat-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {smartACThermostat}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">water heater automation</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="waterHeaterAutomation1"
                        onClick={()=>setWaterHeaterAutomation1(waterHeaterAutomation1+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="waterHeaterAutomation1"
                        onClick={()=>{waterHeaterAutomation>0?setWaterHeaterAutomation1(waterHeaterAutomation1-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {waterHeaterAutomation1}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">portable action clicker</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="portableActionClicker"
                        onClick={()=>setPortableActionClicker(portableActionClicker+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="portableActionClicker"
                        onClick={()=>{portableActionClicker>0?setPortableActionClicker(portableActionClicker-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {portableActionClicker}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">light level monitor</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        name="lightLevelMonitor"
                        onClick={()=>setLightLevelMonitor(lightLevelMonitor+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        name="lightLevelMonitor"
                        onClick={()=>{lightLevelMonitor>0?setLightLevelMonitor(lightLevelMonitor-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                  {lightLevelMonitor}
                  </span>
                </div>
           </div>
           
           {/* all row end */}
        </div>

        </div>
        {/* w-96 */}
        <div className="border border-gray-400 rounded-sm flex-1">
        <p className="h-8 bg-default uppercase text-white font-[aftika-extra-light] text-sm px-4 pt-1">safety</p>
        <div className="py-2 flex flex-col gap-2 px-4">
        {/* all row start */}
           <div className="flex justify-between items-center">
               <p className="text-xs text-default capitalize">smart door lock</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setSmartDoorLock(smartDoorLock+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{smartDoorLock>0?setSmartDoorLock(smartDoorLock-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {smartDoorLock}
                  </span>
                </div>
                </div>
                {/* one row */}
           <div className="flex justify-between items-center">
               <p className="text-xs text-default capitalize">indoor 360 camera</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setIndoorCamera(indoorCamera+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{indoorCamera>0?setIndoorCamera(indoorCamera-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {indoorCamera}
                  </span>
                </div>
           </div>
           {/* one row end */}
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">outdoor camera</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setOutdoorCamera(outdoorCamera+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{outdoorCamera>0?setOutdoorCamera(outdoorCamera-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {outdoorCamera}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">motion alarm</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setMotionAlarm(motionAlarm+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{motionAlarm>0?setMotionAlarm(motionAlarm-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {motionAlarm}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">door/window status sensor</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setDoorStatusSensor(doorStatusSensor+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{doorStatusSensor>0?setDoorStatusSensor(doorStatusSensor-1):''}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {doorStatusSensor}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">sounder alarm</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setSounderAlarm(sounderAlarm+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{sounderAlarm>0?setSounderAlarm(sounderAlarm-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {sounderAlarm}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">smoke/fire detector</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setSmokeDetector(smokeDetector+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{smokeDetector>0?setSmokeDetector(smokeDetector-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {smokeDetector}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">gas sensor</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setGasSensor(gasSensor+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{gasSensor>0?setGasSensor(gasSensor-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {gasSensor}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">water flood detection</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setWaterFloodDetection(waterFloodDetection+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{waterFloodDetection>0?setWaterFloodDetection(waterFloodDetection-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {waterFloodDetection}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">enviromental monitoring</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setEnviromentalMonitoring(enviromentalMonitoring+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{enviromentalMonitoring>0?setEnviromentalMonitoring(enviromentalMonitoring-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {enviromentalMonitoring}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">CO2 level monitoring</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setCo2LevelMonitoring(co2LevelMonitoring+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{co2LevelMonitoring>0?setCo2LevelMonitoring(co2LevelMonitoring-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {co2LevelMonitoring}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">panic portable clicker</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setPanicPortableClicker(panicPortableClicker+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{panicPortableClicker>0?setPanicPortableClicker(panicPortableClicker-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {panicPortableClicker}
                  </span>
                </div>
           </div>
           {/* all row end */}
        </div>
        </div>
        <div className="border border-gray-400 rounded-sm flex-1">
        <p className="h-8 bg-default uppercase text-white font-[aftika-extra-light] text-sm px-4 pt-1">accessibility</p>
        <div className="py-2 flex flex-col gap-2 px-4">
        {/* all row start */}
           <div className="flex justify-between items-center">
               <p className="text-xs text-default capitalize">Voice Control (Google Home)</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setVoiceControl(voiceControl+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{voiceControl>0?setVoiceControl(voiceControl-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {voiceControl}
                  </span>
                </div>
                </div>
                {/* one row */}
           <div className="flex justify-between items-center">
               <p className="text-xs text-default capitalize">Smart Door Bell with Camera</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setSmartDoorBellWithCamera(smartDoorBellWithCamera+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{smartDoorBellWithCamera>0?setSmartDoorBellWithCamera(smartDoorBellWithCamera-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {smartDoorBellWithCamera}
                  </span>
                </div>
           </div>
           {/* one row end */}
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">TV & Sound System Controller</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setTvSystemController(tvSystemController+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{tvSystemController>0?setTvSystemController(tvSystemController-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {tvSystemController}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">Electrical Plug</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setElectricalPlug(electricalPlug+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{electricalPlug>0?setElectricalPlug(electricalPlug-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {electricalPlug}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">4 Control Touch Screen</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setFourControlTouchScreen(fourControlTouchScreen+1)}
                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{fourControlTouchScreen>0?setFourControlTouchScreen(fourControlTouchScreen-1):""}}
                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {fourControlTouchScreen}
                  </span>
                </div>
           </div>
           <div className="flex justify-between items-center gap-2">
               <p className="text-xs text-default capitalize">6 Control Touch Screen</p>
               <div className="h-8 w-20 border-2 border-slate-400 relative rounded-md">
                  <div className="absolute -right-0.5 -top-0.5">
                    <div className="flex flex-col h-full">
                      <button
                        className={`bg-default rounded-tr-md w-8 h-4 text-white  text-base`}
                        onClick={()=>setSixControlTouchScreen(sixControlTouchScreen+1)}

                      >
                        +
                      </button>
                      <button
                        className={`bg-default rounded-br-md w-8 h-4 text-white text-base`}
                        onClick={()=>{sixControlTouchScreen>0?setSixControlTouchScreen(sixControlTouchScreen-1):""}}

                      >
                        ¯
                      </button>
                    </div>
                  </div>
                  <span className="text-default text-sm absolute top-1 left-5">
                    {sixControlTouchScreen}
                  </span>
                </div>
           </div>
           
           {/* all row end */}
        </div>
        </div>
    </div>

{/* Three boxes */}

          {/* bottom */}
          <div className="flex items-center justify-around gap-20">
            <div className="relative bottom-10 laptop:block hidden">
              <Progress active={active} />
            </div>
            <div className="flex gap-10">
            
              <button
                className="z-10 relative text-white laptop:text-base desktop:text-xl w-44 h-9 desktop:h-12 rounded-lg small:block hidden"
                style={{ background: "#747474" }}
                onClick={() => setActive(active - 1)}
              >
                Back
              </button>
              <button
                className="z-10 relative text-white laptop:text-base desktop:text-xl w-44 h-9 desktop:h-12 rounded-lg bg-default "
                onClick={() => setActive(4)}
              >
                Book Our Expert
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page3;
