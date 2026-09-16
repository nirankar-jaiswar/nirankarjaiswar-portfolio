import Tags from "./Tags"

export default function Research() {
  return (
    <section id="research" className="section" aria-labelledby="research-title">
      <div className="page-width">
        <h2 id="research-title">Research &amp; Applied AI</h2>
        <article className="panel research-card">
          <div className="research-heading"><p className="eyebrow">Master of Information Technology | Research</p><span className="grade">Final result: A grade</span></div>
          <h3>Master’s Research: Browser-Based Machine Learning</h3>
          <p className="research-full-title">A Comparative Analysis of JavaScript-based vs Python-based Artificial Intelligence Frameworks for Browser-based Machine Learning in Terms of Performance and Scalability</p>
          <div className="two-columns">
            <div className="prose">
              <p>My research compared two machine-learning execution paths running entirely in the browser: TensorFlow.js and a Python-originated PyTorch model exported to ONNX and executed in-browser through ONNX Runtime Web using WebAssembly (WASM).</p>
              <p>The study used a controlled quantitative experimental design and evaluated inference latency, throughput, workload size, model complexity, browser environment, and long-duration runtime stability.</p>
              <p>Experiments were conducted across Chrome, Firefox, and Safari, with a separate 120-minute long-duration test under the baseline model condition.</p>
            </div>
            <div className="finding"><h4>Key findings</h4><p className="lead">The results showed that no single framework path was consistently superior across all tested conditions.</p><p>Under the smallest workload, the ONNX/WASM path performed better. Under larger batch sizes, TensorFlow.js performed more strongly. As model complexity increased, the ONNX/WASM advantage at the smallest workload narrowed, while TensorFlow.js performed more strongly at batch sizes 10 and 50, particularly under higher-complexity conditions. Cross-browser testing showed that the relative performance relationship did not remain uniform across Chrome, Firefox, and Safari. This means results from one browser should not be assumed to generalise directly to another.</p><p>Both framework paths remained broadly stable during the <strong>120-minute</strong> long-duration test under the tested baseline condition. In this phase, the ONNX/WASM path maintained lower overall latency and higher overall throughput. Overall conclusion: Browser-based ML framework selection was context-dependent and was influenced by workload size, model complexity, browser environment, and runtime duration.</p></div>
          </div>
          <Tags items={["TensorFlow.js", "PyTorch", "ONNX Runtime Web", "WebAssembly", "JavaScript", "Python", "Statistical Analysis", "Browser Performance"]} />
        </article>
        <article className="secondary-research">
          <h3>Facial Emotion Recognition</h3>
          <div className="prose"><p>Developed a Python-based facial emotion classification workflow using image feature extraction with Local Binary Patterns (LBP) and Histogram of Oriented Gradients (HOG).</p><p>Implemented an XCS Learning Classifier System and compared its performance against SVM, Random Forest and MLP models using accuracy, precision, recall, F1-score and confusion matrices.</p></div>
          <Tags items={["Python", "OpenCV", "scikit-learn", "Machine Learning", "Image Processing", "Model Evaluation"]} />
        </article>
      </div>
    </section>
  )
}
