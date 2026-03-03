import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  let waitlist = List.empty<Text>();

  public shared ({ caller }) func signUp(email : Text) : async () {
    if (waitlist.contains(email)) { Runtime.trap("Email already signed up") };
    waitlist.add(email);
  };

  public query ({ caller }) func waitlistCount() : async Nat {
    waitlist.size();
  };

  public query ({ caller }) func isInWaitlist(email : Text) : async Bool {
    waitlist.contains(email);
  };
};
