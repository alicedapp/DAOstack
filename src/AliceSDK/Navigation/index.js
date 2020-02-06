import { NativeModules } from "react-native";

const goBack = () => NativeModules.NativeVCModule.popBack();

const goHome = () => NativeModules.NativeVCModule.popToRootVC();

const goWalletAndSetting = () => NativeModules.NativeVCModule.walletAndSetting();

export const Navigation = {
  goBack,
  goHome,
  goWalletAndSetting
};
