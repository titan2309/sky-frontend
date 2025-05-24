import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container-fluid howitworks-container">
          <h2 className="howitworks-heading">How SkyScribe Works</h2>
        </div>
        <section className="step-section-1">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              <img
                src="https://placehold.co/600x400?text=Write+Instantly"
                alt="Start Writing Instantly"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6 step-section-col">
              <h4 className="howitworks-step-heading">
                1. Start Writing Instantly
              </h4>
              <p className="howitworks-step-subheading">
                No setup. Just click 'New Note' and begin typing in a clean,
                distraction-free editor. Your ideas matter more than menus or
                buttons.
              </p>
            </div>
          </div>
        </section>
        <section className="step-section-2">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6 step-section-col">
              <img
                src="https://placehold.co/600x400?text=Organize+Notes"
                alt="Organize with Tags and Folders"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6 step-section-col">
              <h4 className="howitworks-step-heading">
                2. Organize with Tags & Folders
              </h4>
              <p className="howitworks-step-subheading">
                Stay organized effortlessly. Add tags and sort notes into
                folders to keep everything easy to find and clutter-free.
              </p>
            </div>
          </div>
        </section>

        <section className="step-section-3">
          <div className="row align-items-center">
            <div className="col-md-6 step-section-col">
              <img
                src="https://placehold.co/600x400?text=Markdown+Support"
                alt="Edit with Markdown"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6 step-section-col">
              <h4 className="howitworks-step-heading">
                3. Edit Seamlessly with Markdown
              </h4>
              <p className="howitworks-step-subheading">
                Use markdown to format text quickly—headings, bullet points,
                bold/italic, and more—without breaking your writing flow.
              </p>
            </div>
          </div>
        </section>

        <section className="step-section-4">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6 step-section-col">
              <img
                src="https://placehold.co/600x400?text=Autosave+and+Sync"
                alt="Autosave and Sync"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6 step-section-col">
              <h4 className="howitworks-step-heading">
                4. Save, Sync, and Stay Productive
              </h4>
              <p className="howitworks-step-subheading">
                Your notes are saved automatically. Work offline or online, and
                pick up right where you left off—on any device.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default HowItWorks;
