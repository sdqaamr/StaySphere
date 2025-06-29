import { StyleSheet } from "react-native";

const primarycolor = "#8100d1";
const secondarycolor = "#ce80ff";
const backgroundcolor = "#F0F0F0";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundcolor,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  safeArea2: {
    flex: 1,
    backgroundColor: "white",
  },
  activityIndicator: {
    margin: 10,
    alignSelf: "center",
  },
  splashLogo: {
    height: 160,
    width: 160,
    contentFit: "contain",
  },
  onboardingTitleContainer: {
    alignItems: "center",
  },
  onboardingTitle: {
    fontSize: 18,
    textAlign: "center",
  },
  mainTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: primarycolor,
  },
  logoText: {
    fontFamily: "Roboto-BlackItalic",
    fontSize: 25,
    color: primarycolor,
  },
  logoText2: {
    color: secondarycolor,
  },
  onboardingImg: {
    height: 210,
    marginTop: 5,
    width: 300,
  },
  onboardingDescription: {
    fontSize: 15,
    fontWeight: 500,
    width: 300,
    textAlign: "center",
    lineHeight: 20,
    paddingTop: 15,
  },
  onboardingButton: {
    paddingVertical: 8,
    paddingHorizontal: 28,
    backgroundColor: primarycolor,
    borderRadius: 30,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginBottom: 80,
  },
  onboardingButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 3,
  },
  logoWithTextContainer: {
    flexDirection: "row",
    gap: 10,
  },
  logoImg: {
    width: 50,
    height: 50,
    contentFit: "contain",
  },
  screensImgContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 150,
  },
  screensImg: {
    height: 150,
    width: 300,
  },
  accountEntryContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 9,
  },
  primaryButton: {
    width: 325,
    borderRadius: 8,
    backgroundColor: primarycolor,
    paddingVertical: 12,
    marginTop: 30,
  },
  primaryButtonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  primaryLightButton: {
    width: 325,
    borderRadius: 8,
    backgroundColor: "transparent",
    paddingVertical: 9,
    borderColor: primarycolor,
    borderStyle: "solid",
    borderWidth: 2,
  },
  primaryLightButtonText: {
    fontSize: 16,
    color: primarycolor,
    textAlign: "center",
  },
  footerContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
    color: secondarycolor,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "orange",
  },
  loginHeading: {
    justifyContent: "center",
    textAlign: "left",
    fontSize: 27,
    width: 310,
    fontFamily: "Roboto-Bold",
    paddingBottom: 20,
  },
  textInput: {
    width: 330,
    paddingVertical: 13,
    color: "black",
    backgroundColor: "#E0E1E6",
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 15,
    marginTop: 8,
  },
  passwordOuterContainer: {
    width: "100%",
    alignItems: "center",
  },
  passwordInnerContainer: {
    width: 330,
    position: "relative",
  },
  eyeContainer: {
    position:"absolute",
    right: 20,
    top: 22,
    zIndex: 1,
  },
  additionalTextContainer: {
    width: 300,
    alignItems: "flex-end",
    marginTop: 8,
  },
  additionalText: {
    color: secondarycolor,
    fontSize: 15,
  },
  intermediateContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 20,
  },
  intermediateLine: {
    width: 95,
    height: 2,
    backgroundColor: "#c7c7c7",
    borderRadius: 40,
    marginTop: 11,
  },
  intermediateText: {
    color: "#999999",
  },
  allIconsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  iconContainer: {
    paddingVertical: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#c7c7c7",
    borderWidth: 1,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 40,
    width: 40,
  },
  simpleText: {
    justifyContent: "center",
    textAlign: "left",
    fontSize: 15,
    width: 300,
    fontFamily: "NotoSans-SemiBold",
  },
  otpBoxesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  otpTextInput: {
    height: 60,
    width: 60,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: primarycolor,
    fontSize: 30,
    fontFamily: "NotoSans-SemiBold",
    marginVertical: 30,
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 10,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  verifyText: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 15,
    width: 300,
    fontFamily: "NotoSans-SemiBold",
    paddingTop: 15,
  },
  homeHeaderContainer: {
    flexDirection: "column",
    gap: 15,
    width: 345,
  },
  locationContainer: {
    flexDirection: "row",
    paddingTop: 5,
  },
  iconLocationOutline: {
    fontSize: 22,
    color: "black",
  },
  logotextAndSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  searchButton: {
    height: 40,
    width: 40,
    backgroundColor: primarycolor,
    borderRadius: 40,
  },
  searchIcon: {
    fontSize: 24,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 7,
  },
  categoryButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  categoryButton: {
    height: 38,
    width: 100,
    borderRadius: 40,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },
  sliderIcon: {
    color: "gray",
    fontSize: 16,
  },
  categoryButtonText: {
    color: "gray",
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    paddingLeft: 5,
  },
  cardsHeadingContainer: {
    flexDirection: "row",
    width: 350,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 15,
  },
  cardsHeadingText: {
    fontSize: 17,
  },
  recommendationsContainer: {
    width: 383,
    paddingTop: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    gap: 15,
  },
  card: {
    height: 500,
    width: 260,
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "35%",
    top: 0,
    contentFit: "stretch",
  },
  tabIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 5,
    gap: 50,
  },
  tabIcons: {
    fontSize: 26,
    color: primarycolor,
  },
  cardImgIconsContainer: {
    flexDirection: "row-reverse",
    gap: 15,
    position: "absolute",
    right: 0,
    margin: 10,
  },
  cardImgIconRoundContainer: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  likeIcon: {
    justifyContent: "center",
    fontSize: 26,
    color: "red",
    textAlign: "center",
    paddingTop: 5,
  },
  shareIcon: {
    justifyContent: "center",
    fontSize: 24,
    color: "blue",
    textAlign: "center",
    paddingTop: 6,
    paddingRight: 3,
  },
  //card data below image is is started here:
  nameAndLocContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingTop: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  cardsSimpleText: {
    color: "gray",
    fontSize: 14,
  },
  cardsPriceContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  cardIconsContainer: {
    flexDirection: "row",
    gap: 20,
    padding: 15,
  },
  cardsCategoryButtonContainer: {
    flexDirection: "row",
    gap: 10,
    paddingLeft: 15,
  },
  cardsCategoryButton: {
    height: 38,
    width: 100,
    borderStyle: "solid",
    borderWidth: 1.2,
    borderColor: primarycolor,
    borderRadius: 40,
    backgroundColor: backgroundcolor,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardsCategoryButtonText: {
    color: primarycolor,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Roboto-Medium",
  },
  cardsSmallButton: {
    height: 38,
    width: 55,
    borderStyle: "solid",
    borderWidth: 1.2,
    borderColor: primarycolor,
    borderRadius: 40,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginVertical: 10,
  },
  cardsPrimaryButton: {
    color: "white",
    backgroundColor: primarycolor,
    paddingVertical: 7,
    width: "90%",
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.5,
    fontFamily: "Roboto-Regular",
  },
  cardsSecondaryButton: {
    color: primarycolor,
    borderColor: primarycolor,
    paddingVertical: 6,
    width: "90%",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: primarycolor,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 0.5,
    fontFamily: "Roboto-Medium",
  },
  scheduleContainer: {
    width: 385,
    height: 615,
    alignSelf: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    elevation: 5,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 4 },
    boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.2)",
    paddingTop: 10,
    alignItems: "center",
  },
  scheduleInnerContainer: {
    height: 300,
    width: 345,
    backgroundColor: backgroundcolor,
    marginTop: 35,
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  scheduleTextInput: {
    width: 320,
    paddingVertical: 13,
    color: "black",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 15,
    marginTop: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "gray",
  },
  scheduleFooter: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  scheduleButton: {
    width: 325,
    borderRadius: 8,
    backgroundColor: primarycolor,
    paddingVertical: 12,
    marginTop: 10,
    alignSelf: "center",
  },
  scheduleFooterUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 330,
    alignItems: "center",
  },
  whatsAppContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  whatsAppText: {
    alignSelf: "center",
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
    marginVertical: 10,
  },

  
  propertyDetailsHeaderContainer: {
    flexDirection: "row",
    width: 345,
    paddingTop: 15,
    justifyContent: "space-between",
  },
  propertyDetailsHeaderTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  propertyDetailsHeaderText: {
    fontSize: 18,
    paddingLeft: 40,
  },
  propertyDetailsHeaderIcons: {
    flexDirection: "row",
    gap: 10,
    position: "relative",
    right: 0,
  },
  propertyDetailsLike: {
    fontSize: 26,
    color: "red",
  },
  propertyDetailsShare: {
    fontSize: 24,
    color: "blue",
    paddingTop: 3,
    paddingRight: 5,
  },
  propertyDetailsHeading2: {
    flexDirection: "row",
    alignItems: "left",
    width: 345,
    paddingTop: 40,
    paddingBottom: 10,
  },
  propertyImgContainer: {
    flexDirection: "row",
    gap: 10,
    width: 380,
  },
  propertyImg: {
    height: 215,
    width: 330,
    margin: 5,
    borderRadius: 10,
  },
  propertyDetailsContentContainer: {
    width: 370,
  },
  propertyRatingContainer: {
    paddingVertical: 10,
    paddingLeft: 5,
  },
  servicesContainer: {
    paddingBottom: 20,
  },
  servicesInnerContainer: {
    flexDirection: "row",
    gap: 15,
    paddingLeft: 10,
    paddingTop: 10,
  },
  servicesContentContainer: {
    flexDirection: "row",
    gap: 5,
  },
  servicesText: {
    paddingTop: 3,
  },
  feedbackCardsContainer: {
    flexDirection: "row",
    width: 380,
    paddingVertical: 8,
    paddingLeft: 5,
  },
  feedbackCard: {
    height: 100,
    width: 265,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 7,
  },
  feedbackCardContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  feedbackUserImg: {
    marginTop: 8,
    marginLeft: 10,
    height: 55,
    width: 55,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  feedbackContentContainer: {
    width: 200,
    flexDirection: "column",
    gap: 3,
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  feedbackRatingContainer: {
    flexDirection: "row",
    gap: 3,
  },
  feedbackRatingText: {
    color: "gray",
  },
  feedbackCommentText: {
    fontSize: 10,
  },

  propertyDetailsLocationContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    paddingTop: 30,
  },
  propertyDetailsGoogleMap: {
    height: 230,
    width: 350,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 50,
    borderStyle: "dashed",
    borderWidth: 0.3,
    borderColor: "gray",
  },
  propertyDetailsButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 5,
  },
  propertyDetailsPrimaryButton: {
    paddingVertical: 10,
    width: 178,
    backgroundColor: primarycolor,
    borderRadius: 8,
  },
  propertyDetailsPrimaryButtonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    paddingTop: 2,
  },
  propertyDetailsSecondaryButton: {
    paddingVertical: 10,
    width: 175,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: primarycolor,
  },
  propertyDetailsSecondaryButtonText: {
    fontSize: 16,
    color: primarycolor,
    textAlign: "center",
  },
  bookingHeaderText: {
    fontSize: 18,
  },
  bookingImgAndDetailsContainer: {
    flexDirection: "row",
    width: 345,
  },
  bookingImgDetailsContainer: {
    flexDirection: "column",
    gap: 10,
    paddingTop: 15,
    paddingLeft: 5,
  },
  bookingImg: {
    height: 180,
    width: 180,
    margin: 8,
    marginBottom: 15,
    borderRadius: 10,
  },
  bookingDetailsContainer: {
    paddingVertical: 5,
    width: 350,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 7,
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  bookingDetailsTextInput: {
    marginVertical: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: backgroundcolor,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  bookingDetailsContainerDouble: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bookingDetailsContainer2: {
    width: 152,
  },
  intermediateLine2: {
    width: 1.5,
    height: 60,
    backgroundColor: "#c7c7c7",
    borderRadius: 40,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -1,
    marginTop: -30,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 13,
  },
  radio: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: "#c7c7c7",
    borderRadius: 10,
    marginHorizontal: 6,
  },
  sharingContainer: {
    flexDirection: "row",
    gap: 10,
  },
  operatorsContainer: {
    height: 25,
    width: 25,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    marginVertical: 8,
  },
  operators: {
    fontSize: 16,
    textAlign: "center",
  },
  extraPadding: {
    padding: 30,
  },
  bookingFooterContainer: {
    padding: 5,
    width: 365,
    alignSelf: "center",
    flexDirection:"row",
    justifyContent: "space-between",
  },
  bookingButton: {
    paddingVertical: 12,
    width: 120,
    backgroundColor: primarycolor,
    borderRadius: 8,
  },
  checkoutContainer: {
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 5,
    paddingTop: 10,
  },
  checkoutAllPaymentsContainer: {
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 10,
    paddingTop: 20,
  },
  checkoutPaymentContainer: {
    flexDirection: "row",
  },
  checkoutPaymentText: {
    fontSize: 15,
  },
  checkoutPriceText: {
    fontSize: 15,
    marginLeft: 170,
    position: "absolute"
  },
  checkoutFooterContainer: {
    alignItems: "center",
    paddingVertical: 5,
  },
  paymentButton: {
    width: 355,
    borderRadius: 8,
    backgroundColor: secondarycolor,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignSelf: "center",
  },
  paymentButtonTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentMethodsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentSuccessText: {
    fontSize: 20,
    fontWeight: 600,
    fontStyle: "italic",
  },
  currentCard: { 
    height: 500,
    width: 355,
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    marginTop: 10,
  },
  currentCardImage: {
    width: "100%",
    height: "40%",
    top: 0,
    contentFit: "stretch",
  },
  viewingPeopleContainer: {
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    marginTop: 157,
    backgroundColor: "rgba(114, 2, 170, 0.8)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  stayButton: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "rgba(234, 195, 37, 0.6)",
    alignItems: "center",
    position: "absolute",
    marginTop: 10,
  },
  daysLeftContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingTop: 10,
    width: "100%",
    justifyContent: "space-between",
    marginTop: 7,
    marginBottom: 20,
  },
  currentDaysLeftButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#E37600",
    backgroundColor: "#FFB573",
    alignItems: "center",
  },
  currentCardsCategoryButtonContainer: {
    flexDirection: "row",
    gap: 10,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  currentCardsCategoryButton: {
    height: 38,
    paddingHorizontal: 10,
    borderStyle: "solid",
    borderWidth: 1.2,
    borderColor: primarycolor,
    borderRadius: 40,
    backgroundColor: backgroundcolor,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  currentStayButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 10,
  },
});
export default styles;

export const colors = {
  primary: primarycolor,
  secondary: secondarycolor,
};





