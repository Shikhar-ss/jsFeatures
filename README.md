# jsFeatures
trying out java script features

1. deep copy and shallow copy.
2. JS timers and events

**A NOTE ON EVENT LOOP**

Being sigle-threaded, js cannot conduct all computations simultaneuosly.
It need to keep track of all timers and events, and also
prioritize there order of execution.

For that purpose we have Event loop.
which is basically a repetetive cycle which switches through the processing of different computations.

Event loop is needed to work with events and other async callbacks.

Node js offloads, time taking and resource-heavy operations, to the OS and thus keep things fast and efficient.

Callback allows OS process to interact with Node JS process.
Callbacks ASYNCHRONOUSLY process certain things in the background, then HOOK into the EVENT LOOP once the ASYNCHRONOUS job is completed.

