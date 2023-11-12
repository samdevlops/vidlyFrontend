import React from "react";

export default function Contact() {
  return (<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Your email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">How much would you rate your experience with our services on scale of 5?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Comments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Supporting Documents / Screenshots (Optional)</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>
  <button type="submit" class="btn btn-primary">
              Submit
  </button>
</form>);
}
