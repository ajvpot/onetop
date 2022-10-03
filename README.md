# onetop-app

simple app to control tasty one top over ble without recipes, ads, or tracking.



## ble gatt uuids
Advertising: e2779da7-0a82-4be7-b754-31ed3e727253


```java
public class OneTopUuids {
   public static final UUID COOK_CONFIGURATION = UUID.fromString("29888f67-52e0-4507-8c50-fc4224657d33");
   public static final UUID COOK_MODE = UUID.fromString("129be657-e380-49ff-a3db-d0df896038ac");
   public static final UUID COOK_STAGE = UUID.fromString("7761b033-5395-47b6-95fb-af45c1f6cd3c");
   public static final UUID COOK_STATE = UUID.fromString("0d42a2ed-d3d8-4db8-b46c-16454beaa117");
   public static final UUID CURRENT_TEMPERATURE = UUID.fromString("8f080b1c-7c3b-fbb9-584a-f0afd57028f0");
   public static final UUID LAST_KNOWN_ERROR = UUID.fromString("5bcbf6b1-de80-94b6-0f4b-99fb984707b6");
   public static final UUID MASTER_SERVICE = UUID.fromString("be030457-0506-4287-9e2f-e12f7f99c3f1");
   public static final UUID ONE_TOP_ADVERTISER_SERVICE = UUID.fromString("e2779da7-0a82-4be7-b754-31ed3e727253");
   public static final UUID POWER_LEVEL = UUID.fromString("0dd11103-ad63-4862-9798-ff5d85d1d205");
   public static final UUID REMAINING_HOLD_TIME = UUID.fromString("a5f358b5-6e40-4bd9-ad46-61979333acc1");
   public static final UUID REMOTE_CONTROL = UUID.fromString("9b5967c5-5f69-4f64-831e-d9d8aa213b56");
   public static final UUID START_HOLD_TIMER = UUID.fromString("a9a826b9-fb04-4655-b7b6-428aec551df6");
   public static final UUID USER_INFO = UUID.fromString("007a7511-0d69-4749-aae3-856cff257912");
}

public enum OneTopCookMode {
    NONE,
    PRECISION,
    STANDALONE,
    UNKNOWN;
}

```