export function contactPageLoad() {
  const contentDiv = document.querySelector("#content");

  // ── PAGE HEADER ───────────────────────────────────────────
  const pageHeader = document.createElement("div");
  pageHeader.classList.add("page-header");

  const pageTitle = document.createElement("h1");
  pageTitle.classList.add("page-title");
  pageTitle.textContent = "Contact Us";

  const pageLine = document.createElement("span");
  pageLine.classList.add("page-title-line");

  const pageSubtitle = document.createElement("p");
  pageSubtitle.classList.add("page-subtitle");
  pageSubtitle.textContent = "We'd love to hear from you. Reservations recommended.";

  pageHeader.appendChild(pageTitle);
  pageHeader.appendChild(pageLine);
  pageHeader.appendChild(pageSubtitle);
  contentDiv.appendChild(pageHeader);

  // ── CONTACT WRAPPER ───────────────────────────────────────
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrapper");

  // ── LEFT: INFO PANEL ──────────────────────────────────────
  const infoPanel = document.createElement("div");
  infoPanel.classList.add("contact-info");

  const infoData = [
    { label: "Address",      value: "123 Fine Street, New York, NY 10001" },
    { label: "Reservations", value: "+1 (212) 555-0198" },
    { label: "Email",        value: "hello@thefinediners.com" },
    { label: "Hours",        value: "Mon–Thu: 5pm – 11pm\nFri–Sat: 5pm – 1am\nSun: 5pm – 10pm" },
    { label: "Dress Code",   value: "Business casual attire required." },
  ];

  infoData.forEach(({ label, value }) => {
    const block = document.createElement("div");
    block.classList.add("info-block");

    const infoLabel = document.createElement("span");
    infoLabel.classList.add("info-label");
    infoLabel.textContent = label;

    const infoValue = document.createElement("p");
    infoValue.classList.add("info-value");
    infoValue.style.whiteSpace = "pre-line";
    infoValue.textContent = value;

    block.appendChild(infoLabel);
    block.appendChild(infoValue);
    infoPanel.appendChild(block);
  });

  // ── RIGHT: FORM PANEL ─────────────────────────────────────
  const formPanel = document.createElement("div");
  formPanel.classList.add("contact-form-panel");

  const formHeading = document.createElement("h2");
  formHeading.classList.add("form-heading");
  formHeading.textContent = "Make a Reservation";
  formPanel.appendChild(formHeading);

  const fields = [
    { label: "Full Name",        type: "text",   placeholder: "John Smith" },
    { label: "Email Address",    type: "email",  placeholder: "john@example.com" },
    { label: "Phone Number",     type: "tel",    placeholder: "+1 (212) 555-0000" },
    { label: "Date",             type: "date",   placeholder: "" },
    { label: "Number of Guests", type: "number", placeholder: "2" },
  ];

  fields.forEach(({ label, type, placeholder }) => {
    const fieldWrapper = document.createElement("div");
    fieldWrapper.classList.add("field-wrapper");

    const fieldLabel = document.createElement("label");
    fieldLabel.classList.add("field-label");
    fieldLabel.textContent = label;

    const fieldInput = document.createElement("input");
    fieldInput.classList.add("field-input");
    fieldInput.type = type;
    fieldInput.placeholder = placeholder;

    fieldWrapper.appendChild(fieldLabel);
    fieldWrapper.appendChild(fieldInput);
    formPanel.appendChild(fieldWrapper);
  });

  // Special requests textarea
  const textareaWrapper = document.createElement("div");
  textareaWrapper.classList.add("field-wrapper");

  const textareaLabel = document.createElement("label");
  textareaLabel.classList.add("field-label");
  textareaLabel.textContent = "Special Requests";

  const textarea = document.createElement("textarea");
  textarea.classList.add("field-input", "field-textarea");
  textarea.placeholder = "Allergies, celebrations, seating preferences...";
  textarea.rows = 4;

  textareaWrapper.appendChild(textareaLabel);
  textareaWrapper.appendChild(textarea);
  formPanel.appendChild(textareaWrapper);

  // Submit button
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-btn");
  submitBtn.textContent = "Request Reservation";

  submitBtn.addEventListener("click", () => {
    submitBtn.textContent = "Request Sent ✓";
    submitBtn.classList.add("submitted");
    submitBtn.disabled = true;
  });

  formPanel.appendChild(submitBtn);

  contactWrapper.appendChild(infoPanel);
  contactWrapper.appendChild(formPanel);
  contentDiv.appendChild(contactWrapper);
}
